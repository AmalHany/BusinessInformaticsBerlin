/**
 * Main Controller
 */

App.controller('mainCtrl', function($scope, ProductsSrv, $location) {


  /*----------- Angular Bootstrap Typeahead -----------*/

  /* Retrieve List of Product names */
  function ProductCodes() {
    ProductsSrv.getProductCodes().success(function(product) {
         $scope.Products = product;
     });
  };

  /* Record User's Selected Product  */
  $scope.SetProduct = function(product) {
    ProductsSrv.setSelectedProduct(product);
  };

 

  /* Find All Available Product  */
  $scope.SearchProducts = function() {
    $location.url('/products');
  };

  /* Get Products on page render  */
  ProductCodes();

});
