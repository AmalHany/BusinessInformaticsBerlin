var User = require('../models/signup');

//Now this is the server side controller, it first requires our mongoose model from signup.js

module.exports.create= function (req, res) { 	//Exports the create method which is called in the server.js through the API

	var user = new User(req.body); //Just creates a new user with the body of the sent request
	user.save(function (err, result){ //Saves its results and returns them as JSON Objects
		res.json(result);
		
	});

}

module.exports.list = function (req, res) { //The list method just returns all the contents of the collection and stores them in a JSON Array
  User.find({}, function (err, results) {
    res.json(results);
  });
}

//Same goes with the businessdraft controller
