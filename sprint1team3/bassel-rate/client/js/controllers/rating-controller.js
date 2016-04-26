app.controller('ratingController', ['$scope', '$resource', function($scope, $resource){
var Rate = $resource('/api/rating');
Rate.query(function (results){
$scope.rating = results;
});
$scope.rating = []
 $scope.createRate = function (){
var rate = new Rate(); 
rate.rating = $scope.rateRating; 
rate.$save(function(result){
	$scope.rating.push(result);
	$scope.rateRating = '';
});
}
}]);

