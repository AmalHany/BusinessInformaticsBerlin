// l ba run 
var express       = require('express');
var app           = express();
var bodyParser    = require('body-parser');





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
//app.use(express.static('public'));
require('./routes')(app);

module.exports = app;