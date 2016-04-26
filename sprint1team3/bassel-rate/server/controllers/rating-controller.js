var Rate = require('../models/rate');
module.exports.create = function (req, res){
var rate = new Rate(req.body);
  rate.save(function (err, result){
	res.json(result);
});
}
module.exports.list = function (req, res){
	Rate.find({}, function (err, results){
     res.json(results);
	});
	
}