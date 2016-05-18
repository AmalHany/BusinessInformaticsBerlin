var mongoose = require ('mongoose'); 

module.exports = mongoose.model ('Offer', {
	prodName : String,
	prevPrice: String,
	prodOffer: String
});
