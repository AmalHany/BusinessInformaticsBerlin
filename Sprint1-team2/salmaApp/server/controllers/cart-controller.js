var Cart = require('../models/cart');

module.exports.create= function (req, res) {

	var cart = new Cart(req.body);
	cart.save(function (err, result){
		res.json(result);
		
	});

}

module.exports.list = function (req, res) {
  Cart.find({}, function (err, results) {
    res.json(results);
  });
}