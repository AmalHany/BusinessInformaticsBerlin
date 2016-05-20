app.controller('smssController', ['$scope','$resource', function ($scope, $resource){
var Smss = $resource('/api/smss')
	
	Smss.query(function(results){
     $scope.smss = results ;
	});
	$scope.smss = [] 

$scope.sendsms = function(){
	var sms = new Smss();
	sms.content = $scope.smscontent;
	sms.to = $scope.to;
	sms.from = $scope.from;
	sms.$save(function(result){
    $scope.smss.push(result);
    $scope.smscontent = '';
    $scope.to = '';
    $scope.from = '';
	});
}

	

}]);



	

