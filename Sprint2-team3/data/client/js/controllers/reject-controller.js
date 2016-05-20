app.controller('rejectController', ['$scope','$resource', function ($scope, $resource){
var Rejects = $resource('/api/rejects')
	
	Rejects.query(function(results){
     $scope.rejects = results ;
	});
	$scope.rejects = [] 

	$scope.createReject = function() {
		var reject = new Rejects();
		reject.businessName = $scope.businessName;
		reject.isRejected = "Yes";
		reject.reasons = $scope.reasons;
		reject.$save(function (result){
			$scope.rejects.push(result);
			$scope.businessName='';
			$scope.reasons = '';

		});
	}
}]);

