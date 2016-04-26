//Client Side Controller

app.controller('informController', ['$scope', '$resource', function ($scope, $resource) {
	var Inform = $resource('/api/informs');


	Inform.query(function (results) {
    $scope.inform = results;
  });


	$scope.inform = []

	$scope.createInform = function () {
		var inform = new Inform();
		inform.businessName = $scope.bName;
		inform.$save(function (result){
			$scope.inform.push(result);
			$scope.bName = '';			
		});
	}
}]);

