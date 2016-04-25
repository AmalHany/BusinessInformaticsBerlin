var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'),
    signupController = require('./server/controllers/signup-controller');


mongoose.connect('mongodb://localhost:27017/shopialmedia');

app.use(bodyParser());

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/client/views/index.html');
});


app.use('/js', express.static(__dirname + '/client/js'));


//REST API
app.get('/api/users', signupController.list);
app.post('/api/users', signupController.create);

app.listen(8080, function() {
  console.log('I\'m Listening...');
})