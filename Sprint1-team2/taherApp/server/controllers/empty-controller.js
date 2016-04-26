var Empty = require('../models/empty');

module.exports.create= function (req, res) {

	var empty = new Empty(req.body);
	empty.save(function (err, result){
		res.json(result);
		
	});

}
module.exports.empty = function (req, res){
	Empty.remove (function(err){
	if (err){
		throw err; 
	}
	else {
		console.log("documents deleted");
	}
})
};
module.exports.list = function (req, res) {
  Empty.find({}, function (err, results) {
    res.json(results);
  });
}