var bDraft = require('../models/bDraft');

module.exports.create= function (req, res) {

	var bDraft2 = new bDraft(req.body);
	bDraft2.save(function (err, result){
		res.json(result);
		
	});

}

module.exports.list = function (req, res) {
  bDraft.find({}, function (err, results) {
    res.json(results);
  });
}