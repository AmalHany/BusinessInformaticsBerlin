var mongoose = require ('mongoose'); //This our mongoose call like in the server.js

module.exports = mongoose.model ('User', {
	email : String,
	password: String,
	firstName : String,
	lastName : String,
	age : String
});

// module.exports makes the method callable via the require methods, you can see examples in the server
/* The mongoose model function gives it a name and the structure of our collection, this can get way more detailed, like 
setting the uniqueness of a parameter or if its required or not etc 
This is the same process in the bdraft.js
*/