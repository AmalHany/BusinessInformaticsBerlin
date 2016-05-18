var mongoose = require ('mongoose');

module.exports = mongoose.model ('product', {
	prodName : String,
	prodPrice: String,
	prodDesc: String
});