var mongoose = require ('mongoose');

module.exports = mongoose.model ('bDraft', {
	businessName : String,
	productName: String,
	brandName: String,
	price: String,
	about: String
});