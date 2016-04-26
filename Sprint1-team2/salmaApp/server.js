var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'),
    cartController = require('./server/controllers/cart-controller');

mongoose.connect('mongodb://localhost:27017/salmadb');

app.use(bodyParser());

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));

//REST API
app.get('/api/carts', cartController.list);
app.post('/api/carts', cartController.create);


app.listen(3000, function() {
  console.log('I\'m Listening...');
})