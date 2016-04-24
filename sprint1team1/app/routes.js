module.exports = function(app,mongo) {

    var mongo = require('./db.js');
    
    /* GET ALL USERS */
    
    app.get('/api/data/users', function(req, res) {
      var codes =  require('../users.json');
      res.json( codes );
    });

    app.get('/db/seed', function(req, res) {
          // SEED brands
          mongo.db().collection('user').find().toArray(function (err,docs){
            if (err) throw error('user insert many failed');
            if(docs.length >0)
              console.log('Users already seeded');
            else{
             var manyUsers = require('../users');
             mongo.db().collection('user').insertMany(manyUsers, function(err, res) {
              if (err) {
              	console.log('users insert many failed');
              }
              else console.log("users insert many successful");
            });
           }
         });
      });
    app.get('/db/delete', function(req, res) {
	//DELETE USERS
     mongo.db().collection('user').deleteMany( {}, function(err, results) {
      console.log("users deleted successfully");

    });
     
});
};