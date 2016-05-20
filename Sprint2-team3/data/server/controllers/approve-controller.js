var Approve = require('../models/approve');

module.exports.create = function(req,res){

var approve = new Approve(req.body);
approve.save(function (err,result){
	res.json(result);
});
}
module.exports.list = function (req, res){
	 Approve.find({}, function(err, results){
	 	res.json(results);
	 });
}