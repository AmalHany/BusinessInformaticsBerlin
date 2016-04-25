app.controller('reviewsController', ['$scope','$resource', function ($scope, $resource){
var Reviews = $resource('/api/reviews')
	
	Reviews.query(function(results){
     $scope.reviews = results ;
	});
	$scope.reviews = [] 

	$scope.createreview = function() {
		var review = new Reviews();
		review.email = $scope.reviewemail;
		review.$save(function (result){
			$scope.reviews.push(result);
			$scope.reviewemail='';

		});
	}
}]);






	

