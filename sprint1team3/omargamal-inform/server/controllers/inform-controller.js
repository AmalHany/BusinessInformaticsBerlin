var Inform = require('../models/inform');

module.exports.create= function (req, res) {

	var inform = new Inform(req.body);
	inform.save(function (err, result){
		res.json(result);
		
	});

}

module.exports.list = function (req, res) {
  Inform.find({}, function (err, results) {
    res.json(results);
  });
}