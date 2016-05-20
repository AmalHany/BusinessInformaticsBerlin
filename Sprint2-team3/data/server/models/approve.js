var mongoose = require ('mongoose');

module.exports = mongoose.model('approves', {
    businessName  : String,
	isApproved: String
});