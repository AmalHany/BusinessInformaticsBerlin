var Productreview = require('../models/productreview');
module.exports.create = function(req, res){
var productreview = new Productreview(req.body);
productreview.save(function(err, result){
	res.json(result);
});
          
        } 
        module.exports.list = function (req, res){
        	Productreview.find({}, function (err, results){
               res.json(results);
        	});
        }