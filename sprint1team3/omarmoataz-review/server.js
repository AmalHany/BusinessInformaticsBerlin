var express        = require ('express'), 
        app               = express(),
         bodyParser = require('body-parser'),
         mongoose = require('mongoose'),
        productreviewsController = require('./server/controllers/productreviews-controller');

mongoose.connect('mongodb://localhost:27017/mizo-review');
app.use(bodyParser());

        app.get('/', function (req, res){
        	res.sendfile(__dirname + '/client/views/index.html');
        });

        app.use('/js', express.static(__dirname + '/client/js'));
 
        app.get('/api/productreviews', productreviewsController.list);
        app.post('/api/productreviews', productreviewsController.create);

        app.listen(8080, function(){
        	console.log('I\'m here...');
        })