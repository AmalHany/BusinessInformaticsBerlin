var Review = require('../models/review');

module.exports.create = function(req,res){

var review = new Review(req.body);
review.save(function (err,result){
	res.json(result);
});
}
module.exports.list = function (req, res){
	 Review.find({}, function(err, results){
	 	res.json(results);
	 });
}