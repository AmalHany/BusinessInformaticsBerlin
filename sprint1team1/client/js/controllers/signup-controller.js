//Client Side Controller

app.controller('signupController', ['$scope', '$resource', function ($scope, $resource) {
	var User = $resource('/api/users');


	User.query(function (results) {
    $scope.user = results;
  });


	$scope.user = []

	$scope.createUser = function () {
		var user = new User();
		user.email = $scope.userEmail;
		user.password = $scope.userPass;
		user.firstName = $scope.userFName;
		user.lastName = $scope.userLName;
		user.age = $scope.userAge;
		user.$save(function (result){
			$scope.user.push(result);
			$scope.userEmail = '';
			$scope.userPass = '';
			$scope.userFName = '';
			$scope.userLName = '';
			$scope.userAge = '';
		});
	}
}]);

