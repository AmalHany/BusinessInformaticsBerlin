var mongoose = require ('mongoose');

module.exports = mongoose.model ('Cart', {
	product : String,
	price: String
});