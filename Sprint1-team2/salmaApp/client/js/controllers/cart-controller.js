app.controller('cartController', ['$scope', '$resource', function ($scope, $resource) {
	var Cart = $resource('/api/carts');


	Cart.query(function (results) {
    $scope.cart = results;
  });


	$scope.cart = []

	$scope.createCart = function () {
		var cart = new Cart();
		cart.product = $scope.userProd;
		cart.price = $scope.userPrice;
		cart.$save(function (result){
			$scope.cart.push(result);
			$scope.userProd = '';
			$scope.userPrice = '';
		});
	}
}]);

