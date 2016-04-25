var express        = require ('express'), 
        app               = express(),
       bodyParser         = require('body-parser'),
        mongoose          = require('mongoose'),
        reviewsController = require('./server/controllers/reviews-controller')

mongoose.connect('mongodb://localhost:27017/database');

app.use(bodyParser());
 
app.get('/', function(req, res){
res.sendfile(__dirname + '/client/views/index.html');
	});		

app.use('/js' , express.static(__dirname + '/client/js'));


app.get('/api/reviews' , reviewsController.list);
app.post('/api/reviews' , reviewsController.create);



app.listen(8880, function(){
	console.log('I\'m Listening...');
})
