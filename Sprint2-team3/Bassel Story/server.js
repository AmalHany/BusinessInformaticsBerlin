var    express               = require ('express'), 
        app               = express(),
        bodyParser         = require('body-parser'),
        mongoose          = require('mongoose'),
        smssController  = require('./server/controllers/sms-controller')

mongoose.connect('mongodb://localhost:27017/drafts');

app.use(bodyParser());
 
app.get('/', function(req, res){
res.sendfile(__dirname + '/client/views/sms.html');
	});		

app.use('/js' , express.static(__dirname + '/client/js'));


app.get('/api/smss' , smssController.list);
app.post('/api/smss' , smssController.create);



app.listen(3000, function(){
	console.log('I\'m Listening...');
})
