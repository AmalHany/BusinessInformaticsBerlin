/**
 * Main Controller
 */

App.controller('mainCtrl', function($scope,[ProductsSrv,BrandsSrv], $location) {


  /*----------- Angular Bootstrap Typeahead -----------*/

  /* Retrieve List of Product names */
  // Type ahead 
  function ProductCodes() {
    ProductsSrv.getProductCodes().success(function(product) {
         $scope.Products = product;
         // scope is the list of products
     });
  };
 /* Retrieve List of Brand names */
  function BrandCodes() {
   BrandsSrv.getBrandCodes().success(function(brand) {
         $scope.Brands = brand;
         // scope is the list of brands
     });
  };

  /* Record User's Selected Product  */
  $scope.SetProduct = function(product) {
    ProductsSrv.setSelectedProduct(product);
  };

   /* Record User's Selected Brand */
  $scope.SetBrand = function(brand) {
    BrandsSrv.setSelectedBrand(brand);
  };

 
  /* Find All Available Product  */
  $scope.SearchProducts = function() {
    $location.url('/products');
    // Redirect to the next page 
  };

  /* Find All Available Brand  */
  $scope.SearchBrands = function() {
    $location.url('/brands');
    // Redirect to the next page 
  };

  /* Get Products on page render  */
  ProductCodes();
  BrandCodes();  
});
