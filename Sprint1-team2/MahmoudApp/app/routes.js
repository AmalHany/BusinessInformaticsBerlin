/**
 * App routes:
 */
module.exports = function(app,mongo) {
    var mongo = require('./db.js');
    /* GET ALL BRANDS */
    app.get('/api/data/brands', function(req, res) {
      var codes =  require('../brands.json');
      res.json( codes );
    });
     /* GET ALL PRODUCTS */
    app.get('/api/data/products', function(req, res) {
      var codes =  require('../products.json');
      res.json( codes );
    });
    app.get('/db/seed', function(req, res) {
          // SEED brands
          mongo.db().collection('brands').find().toArray(function (err,docs){
            if (err) throw error('brands insert many failed');
            if(docs.length >0)
              console.log('brands already seeded');
            else{
             var manybrands = require('../brands');
             mongo.db().collection('brands').insertMany(manybrands, function(err, res) {
              if (err) throw error('brands insert many failed');
              else console.log("brands insert many successful");
            });
           }
         });
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
//DELETE BRANDS
     mongo.db().collection('brands').deleteMany( {}, function(err, results) {
      console.log("Brands deleted successfully");

    });
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
    
 /* ROUTE FOR SEARCHING BRANDS */
    app.get('/api/search/:brand', function(req, res) {

                console.log("in search for brand");
      var bra = req.params['brand'];
    
      console.log(bra);
     

    mongo.db().collection('brands').find({
          "Name" : bra.toString(),
          
          
      }).toArray(function (err, brands){
        if (err) cb (err, null);
        res.send(brands);
      });
     }); 
          

}
