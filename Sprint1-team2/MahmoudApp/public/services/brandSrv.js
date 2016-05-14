/**
 * Products Service
 */
App.factory('BrandsSrv', function ($http) {
     return {
         getBrands : function() {
           return $http.get('/api/data/brands');
         }, 
          getBrand : function(selectedBrand) {
           return $http.get('/api/search/' + selectedBrand);
         },
         setSelectedBrand: function(value) {
           this.selectedBrand = value;
         },
         getSelectedBrand: function() {
           return this.selectedBrand;
         }
     };
 });