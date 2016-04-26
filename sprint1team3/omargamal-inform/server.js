var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'),
    informController = require('./server/controllers/inform-controller');

mongoose.connect('mongodb://localhost:27017/omarGamaldb');

app.use(bodyParser());

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));


//REST API
app.get('/api/informs', informController.list);
app.post('/api/informs', informController.create);

app.listen(3000, function() {
  console.log('I\'m Listening...');
})