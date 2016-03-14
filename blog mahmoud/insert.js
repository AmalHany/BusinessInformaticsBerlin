
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');


var url = 'mongodb://localhost:27017/theblog';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  insertDocuments(db, function() {
    db.close();
  });
});

var insertDocuments = function(db, callback) {
  var collection = db.collection('mo7sen');
  collection.insertMany([
    {blog : "nadine"}, {blog : "YAAAH"}
  ])
}
