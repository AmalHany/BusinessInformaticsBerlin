/**
 * Products Controller
 */

App.controller('productsCtrl', function($scope, ProductsSrv, $location) {

$scope.chosenproduct = ProductsSrv.getSelectedProduct();

ProductsSrv.getProduct(ProductsSrv.getSelectedProduct()).success(function (data){
	$scope.products = data;
	console.log('Mahmoud fil CTRL');
});
$scope.Redirect = function() {
    $location.url('/OmarTaher');
    // Redirect to the next page 
  };
  $scope.RedirectSalma = function() {
    $location.url('/SalmaGamal');
    // Redirect to the next page 
  };

});

