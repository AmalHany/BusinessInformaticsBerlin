//get w post the db 
module.exports = function(app,mongo) {
	   var mongo = require('./db.js');

	   app.get('/db/seed', function(req, res) {
          // SEED AIRPORTS
          mongo.db().collection('companies').find().toArray(function (err,docs){
            if (err) throw error('companies insert many failed');
            if(docs.length >0)
              console.log('companies already seeded');
            else{
             var airports = require('../company');
             mongo.db().collection('companies').insertMany(airports, function(err, res) {
              if (err) throw error('companies insert many failed');
              else console.log("companies insert many successful");
            });
           }
         });
      });
  }