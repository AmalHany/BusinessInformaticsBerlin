/**
 * Products Controller
 */

App.controller('productsCtrl', function($scope, ProductsSrv) {

$scope.chosenproduct = ProductsSrv.getSelectedProduct();

ProductsSrv.getProduct(ProductsSrv.getSelectedProduct()).success(function (data){
	$scope.products = data;
	console.log('Mahmoud fil CTRL');
});

});

