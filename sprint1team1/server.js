var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'),
    signupController = require('./server/controllers/signup-controller');

//Random Comment ftw
mongoose.connect('mongodb://localhost:27017/shopialmedia');

app.use(bodyParser());

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/client/views/index.html');
});


app.get('/login.html', function(req, res){
	res.sendFile(__dirname + '/client/views/login.html'); //Needs to be called for each page that wishes to be called

});

app.get('/product.html', function(req, res){
	res.sendFile(__dirname + '/client/views/product.html'); //Needs to be called for each page that wishes to be called

});


app.use('/js', express.static(__dirname + '/client/js'));


//REST API
app.get('/api/users', signupController.list);
app.post('/api/users', signupController.create);

app.listen(8080, function() {
  console.log('I\'m Listening...');
})