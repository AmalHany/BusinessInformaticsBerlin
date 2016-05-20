app.controller('approveController', ['$scope','$resource', function ($scope, $resource){
var Approves = $resource('/api/approves')
	
	Approves.query(function(results){
     $scope.approves = results ;
	});
	$scope.approves = [] 

	$scope.createApprove = function() {
		var approve = new Approves();
		approve.businessName = $scope.businessName;
		approve.isApproved = "Yes";
		approve.$save(function (result){
			$scope.approves.push(result);
			$scope.businessName='';

		});
	}
}]);

