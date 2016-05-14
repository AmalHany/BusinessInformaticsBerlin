var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'),
    emptyController = require('./server/controllers/empty-controller');



mongoose.connect('mongodb://localhost:27017/taherdb');

app.use(bodyParser());

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));


//REST API

app.get('/api/emptys', emptyController.list);
app.post('/api/emptys', emptyController.create);
app.set('/api/delete', emptyController.empty);

app.listen(3000, function() {
  console.log('I\'m Listening...');
})