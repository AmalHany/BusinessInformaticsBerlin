var mongoose = require ('mongoose');

module.exports = mongoose.model('smss', {
content : String,
to: String, 
from : String	
});
