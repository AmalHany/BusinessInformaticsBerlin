
var insertDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('blog');
  // Insert some documents
  collection.insertMany([
    {Title: "Test Title"}, {Blog : "Test Blog"}, {Email : "Test Mail"}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the blog collection");
    callback(result);
  });
}

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/blogapptask';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log('Connected correctly to server');
  
  insertDocuments(db, function() {
    db.close();
  });

});