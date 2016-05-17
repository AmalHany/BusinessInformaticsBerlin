var mongoose = require ('mongoose'); 

module.exports = mongoose.model ('User', {
	prodName : String,
	prevPrice: String,
	prodOffer: String
});
