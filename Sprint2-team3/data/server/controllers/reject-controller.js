var Reject = require('../models/reject');

module.exports.create = function(req,res){

var reject = new Reject(req.body);
reject.save(function (err,result){
	res.json(result);
});
}
module.exports.list = function (req, res){
	 Reject.find({}, function(err, results){
	 	res.json(results);
	 });
}