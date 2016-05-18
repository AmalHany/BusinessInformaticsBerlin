var mongoose = require ('mongoose');

module.exports = mongoose.model('drafts', {
businessName : String,
	productName: String,
	brandName: String,
	price: String,
	about: String
});