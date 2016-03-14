var updateDocument = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('mo7sen');
  // Update document where a is 2, set b equal to 1
  collection.updateOne({ blog : "YAAAH" }
    , { $set: { blog : "yahh123" } }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("Updated the document with the field a equal to 2");
    callback(result);
  });  
}
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/theblog';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

    updateDocument(db, function() {
      db.close();
    });
  
});