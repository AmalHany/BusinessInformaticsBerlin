var Draft = require('../models/draft');

module.exports.create = function(req,res){

var draft = new Draft(req.body);
draft.save(function (err,result){
	res.json(result);
});
}
module.exports.list = function (req, res){
	 Draft.find({}, function(err, results){
	 	res.json(results);
	 });
}