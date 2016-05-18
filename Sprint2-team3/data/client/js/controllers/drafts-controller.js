app.controller('draftsController', ['$scope','$resource', function ($scope, $resource){
var Drafts = $resource('/api/drafts')
	
	Drafts.query(function(results){
     $scope.drafts = results ;
	});
	$scope.drafts = [] 

		

}]);



	

