var app     = require('./app/app');

app.listen('3000', function(){
  console.log('[OK] => HTTP Server listening on http://localhost:3000');
  require('./app/db').init('mongodb://localhost:27017/Sprint2Team2' );
});
