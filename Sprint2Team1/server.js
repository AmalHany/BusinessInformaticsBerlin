var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'),
    signupController = require('./server/controllers/signup-controller'),
    offerController  = require('./server/controllers/offer-controller'),
    bDraftController = require('./server/controllers/businessdraft-controller');

/*
-The above variables are called to require the different packages we installed, hence the term
'require', to check the installed packages check the package.json, you'll find all the packages
under the "Dependencies" tab.

-Var app initiates a new server call, we'll use app to get our webpages and send multiple files
and requests

-The two controller variables just call our server side controllers. 
*/

//Random Comment ftw
//Another one -DJ Khaled
mongoose.connect('mongodb://localhost:27017/shopialmedia'); //Connects to the database "Shopialmedia", if it isn't alerady created it will create one automatically.

app.use(bodyParser()); //Tells the server to use bodyparser 


app.get('/', function (req, res) { //The first parameter sets the url. / means when the page loads
  res.sendFile(__dirname + '/client/views/index.html'); //Sends a file as a response with the directory name(sprint1team1)
                                                        // Plus our html page, the same goes with the rest of the pages. 
                                                        // To access our pages we need to throw these methods
});


app.get('/login.html', function(req, res){
	res.sendFile(__dirname + '/client/views/login.html'); 

});

app.get('/offers.html', function(req, res){
  res.sendFile(__dirname + '/client/views/offers.html'); 

});

app.get('/product.html', function(req, res){
	res.sendFile(__dirname + '/client/views/product.html'); 

});


app.get('/createOffer.html', function(req, res){
  res.sendFile(__dirname + '/client/views/createOffer.html'); 

});

app.get('/profile.html', function(req, res){
	res.sendFile(__dirname + '/client/views/profile.html'); 

});

app.get('/BusinessDraft.html', function(req, res){
	res.sendFile(__dirname + '/client/views/BusinessDraft.html'); 
});

app.use('/js', express.static(__dirname + '/client/js')); //Tells the server to listen to our angular Module


//REST API
//These call our methods within our controllers
app.get('/api/users', signupController.list); //Get --> gets data from the database
app.post('/api/users', signupController.create);//Post --> Inserts into the database. These are Verbs.
app.get('/api/bDrafts', bDraftController.list);
app.post('/api/bDrafts', bDraftController.create);
app.get('/api/offers', offerController.list);
app.post('/api/offers', offerController.create);

app.listen(3000, function() { //Tells the server to listen on a certain port. In this case 3000.
  console.log('I\'m Listening...');
})