var Offer = require('../models/prodOffer');

module.exports.create= function (req, res) {

	var offer = new Offer(req.body); 
	offer.save(function (err, result){ 
		res.json(result);
		
	});

}

module.exports.list = function (req, res) { 
  Offer.find({}, function (err, results) {
    res.json(results);
  });
}

