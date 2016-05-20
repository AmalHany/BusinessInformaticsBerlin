var Sms = require('../models/sms');

module.exports.create = function(req,res){

var sms = new Sms(req.body);
sms.save(function (err,result){
	res.json(result);
});
}
module.exports.list = function (req, res){
	 Sms.find({}, function(err, results){
	 	res.json(results);
	 });
}

