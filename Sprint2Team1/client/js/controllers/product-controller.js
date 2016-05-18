app.controller('prodController', ['$scope', '$resource', function ($scope, $resource) {
	var Product = $resource('/api/products');


	Product.query(function (results) {
    $scope.products = results;
  });

/*
	This query just calls ever user in our collection users, and stores them into an array reults
*/
	$scope.products = [] //This function just empties the array

	$scope.createProduct = function () {		
		var product = new Product();			
		product.prodName = $scope.prodName;	
		product.prodPrice = $scope.prodPrice;	
		product.prodDesc = $scope.prodDesc;
		product.prodCateg = $scope.prodCateg;	//Added by Nouran
		product.$save(function (result){		//this saves the new user, and passes a function that takes the results as a parameter
			$scope.product.push(result);		//Pushes the result into the collection user
			$scope.prodName = '';			//This just resets our html  variables to nothing
			$scope.prodPrice = '';			//This exact process is repeated in the businessdraft controller
			$scope.prodDesc = '';
			$scope.prodCateg = '';		//Added by Nouran
		});
	}
}]);