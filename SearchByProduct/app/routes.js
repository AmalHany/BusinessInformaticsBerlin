/**
 * App routes:
 */
module.exports = function(app,mongo) {
    var mongo = require('./db.js');
    
     /* GET ALL PRODUCTS */
    app.get('/api/data/products', function(req, res) {
      var codes =  require('../products.json');
      res.json( codes );
    });
    app.get('/db/seed', function(req, res) {
          
          // SEED products
          mongo.db().collection('products').find().toArray(function (err,docs){
            if (err) throw error('products insert many failed');
            if(docs.length >0)
              console.log('products already seeded');
            else{
             var products = require('../products');
             mongo.db().collection('products').insertMany(products, function(err, res) {
              if (err) throw error('products insert many failed');
              else console.log("products insert many successful");
            });
           }
         });
      });

//DELETE DB
    app.get('/db/delete', function(req, res) {
     //DELETE PRODUCTS
     mongo.db().collection('products').deleteMany( {}, function(err, results) {
      console.log("Products deleted successfully");

    });
      });
    
    /* RENDER MAIN PAGE */
    app.get('/', function (req, res) {
      res.sendFile(__dirname + '/public/index.html');
    });


 /* ROUTE FOR SEARCHING PRODUCTS */
    app.get('/api/search/:product', function(req, res) {

                console.log("in search for product");
      var prod = req.params['product'];
    
      console.log(prod);
     

    mongo.db().collection('products').find({
          "Name" : prod.toString(),
          
          
      }).toArray(function (err, products){
        if (err) cb (err, null);
        res.send(products);
      });
     }); 
    

}
	