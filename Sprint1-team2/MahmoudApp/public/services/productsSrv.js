/**
 * Products Service
 */
App.factory('ProductsSrv', function ($http) {
     return {
         getBrands : function() {
           return $http.get('/api/data/brands');
         },
          getProductCodes : function() {
           return $http.get('/api/data/products');
         }, 
          getProduct : function(selectedProduct) {
           return $http.get('/api/search/' + selectedProduct);
         },
         setSelectedProduct: function(value) {
           this.selectedProduct = value;
         },
         getSelectedProduct: function() {
           return this.selectedProduct;
         }
     };
 });
