app.controller('signup-controller', function($scope, ProductsSrv) {

$scope.chosenproduct = ProductsSrv.getSelecteduser();

ProductsSrv.getuser(ProductsSrv.getSelecteduser()).success(function (data){
	$scope.products = data;
	console.log('Mahmoud fil CTRL');
});

});
