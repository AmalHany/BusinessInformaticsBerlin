/**
 * Main Controller
 */

App.controller('mainCtrl', function($scope, ProductsSrv, $location) {


  /*----------- Angular Bootstrap Typeahead -----------*/

  /* Retrieve List of Product names */
  // Type ahead 
  function ProductCodes() {
    ProductsSrv.getProductCodes().success(function(product) {
         $scope.Products = product;
         // scope is the list of products
     });
  };

  /* Record User's Selected Product  */
  $scope.SetProduct = function(product) {
    ProductsSrv.setSelectedProduct(product);
  };

 

  /* Find All Available Product  */
  $scope.SearchProducts = function() {
    $location.url('/products');
    // Redirect to the next page 
  };

  /* Get Products on page render  */
  ProductCodes();

});
