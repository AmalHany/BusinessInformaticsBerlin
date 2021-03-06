var express        = require ('express'), 
        app               = express(),
       bodyParser         = require('body-parser'),
        mongoose          = require('mongoose'),
        approveController = require('./server/controllers/approve-controller');
var        draftsController = require('./server/controllers/drafts-controller');
var rejectController = require('./server/controllers/reject-controller');
mongoose.connect('mongodb://localhost:27017/drafts');

app.use(bodyParser());
 
app.get('/', function(req, res){
res.sendfile(__dirname + '/client/views/index.html');
	});		

app.get('/reject.html', function(req, res){
res.sendfile(__dirname + '/client/views/reject.html');
	});		


app.use('/js' , express.static(__dirname + '/client/js'));


app.get('/api/drafts' , draftsController.list);
app.get('/api/approves' , approveController.list);
app.post('/api/approves' , approveController.create);
app.get('/api/rejects' , rejectController.list);
app.post('/api/rejects' , rejectController.create);




app.listen(3000, function(){
	console.log('I\'m Listening...');
})
