app.controller('offerController', ['$scope', '$resource', function ($scope, $resource) {
	var Offer = $resource('/api/offers');
/*the app is the module we just created in the app.js, it calls the controller method which first
takes its name, then the scope, and the resource and passes them as parameters in the function
User just tells angular that the resources is called by the api from the collection Users, within
our database. 

*/
	Offer.query(function (results) {
    $scope.offer = results;
  });

/*
	This query just calls ever user in our collection users, and stores them into an array reults
*/
	$scope.offer = [] //This function just empties the array

	$scope.createOffer = function () {		
		var offer = new Offer();			
		offer.prodName = $scope.prodName;	
		offer.prevPrice = $scope.prevPrice;	
		offer.prodOffer = $scope.prodOffer;
		offer.$save(function (result){		//this saves the new user, and passes a function that takes the results as a parameter
			$scope.offer.push(result);		//Pushes the result into the collection user
			$scope.prodName = '';			//This just resets our html  variables to nothing
			$scope.prevPrice = '';			//This exact process is repeated in the businessdraft controller
			$scope.prodOffer = '';
		});
	}
}]);