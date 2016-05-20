var mongoose = require ('mongoose');

module.exports = mongoose.model('rejects', {
    businessName  : String,
	isRejected: String,
	reasons : String
});