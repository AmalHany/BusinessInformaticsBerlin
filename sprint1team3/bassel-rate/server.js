var express = require('express'),
app        = express(),
bodyParser = require('body-parser'),
mongoose   = require('mongoose'),
ratingController = require('./server/controllers/rating-controller');
mongoose.connect('mongodb://localhost:27017/bassel');

app.use(bodyParser());

app.get('/', function (req, res){
	res.sendfile(__dirname + '/client/views/index.html');
});
app.use('/js', express.static(__dirname + '/client/js'));

app.get('/api/rating', ratingController.list);
app.post('/api/rating', ratingController.create);

app.listen(3000, function(){
	console.log(' sucsess entry'); 
})