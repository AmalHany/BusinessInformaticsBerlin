app.controller('productreviewsController', ['$scope', '$resource', function($scope, $resource){
 
var Productreview = $resource('/api/productreviews');
 
Productreview.query(function (results){
$scope.productreviews = results;
});
 $scope.productreviews = []

 $scope.createProductreview = function(){
 var productreview = new Productreview();
 productreview.content = $scope.productreviewContent;
 productreview.$save(function (result){
 	$scope.productreviews.push(result);
 	$scope.productreviewContent = '';
 });
 }
}]);



