/**
 * Products Service
 // linking between the controller and the server side 
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
            console.log(this.selectedCategory);
           return $http.get('/api/search/' + this.selectedProduct +"?catg=" + this.selectedCategory);
         },
         setSelectedProduct: function(value) {
           this.selectedProduct = value;
         },
         getSelectedProduct: function() {
           return this.selectedProduct;
         },
         setSelectedCategory: function(value) {
           this.selectedCategory = value;
         },
         getSelectedCategory: function() {
           return this.selectedCategory;
         }
     };
 });
