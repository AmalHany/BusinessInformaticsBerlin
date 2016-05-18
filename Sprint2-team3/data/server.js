var express        = require ('express'), 
        app               = express(),
       bodyParser         = require('body-parser'),
        mongoose          = require('mongoose'),
        draftsController = require('./server/controllers/drafts-controller')

mongoose.connect('mongodb://localhost:27017/drafts');

app.use(bodyParser());
 
app.get('/', function(req, res){
res.sendfile(__dirname + '/client/views/index.html');
	});		

app.use('/js' , express.static(__dirname + '/client/js'));


app.get('/api/drafts' , draftsController.list);




app.listen(3000, function(){
	console.log('I\'m Listening...');
})
