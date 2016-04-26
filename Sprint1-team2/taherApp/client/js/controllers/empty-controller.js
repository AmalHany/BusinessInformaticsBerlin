//Client Side Controller

app.controller('emptyController', ['$scope', '$resource', function ($scope, $resource) {
	var Empty = $resource('/api/emptys'); //collection called empty which holds the products within the cart


	Empty.query(function (results) {
    $scope.empty = results;
  });

	$scope.emptyCart = function (){
	
	$scope.empty.splice(0, 100);	
	
	};

	$scope.empty = []



	$scope.createEmpty = function () {
		var empty = new Empty();
		empty.product= $scope.product;
		empty.$save(function (result){
			$scope.empty.push(result);
			$scope.product = '';			
		});
	}
	
	
}]);