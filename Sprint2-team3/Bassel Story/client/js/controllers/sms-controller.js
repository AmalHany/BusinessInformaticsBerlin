app.controller('smssController', ['$scope','$resource', function ($scope, $resource){
var Smss = $resource('/api/smss')
	
	Smss.query(function(results){
     $scope.smss = results ;
	});
	$scope.smss = [] 

$scope.sendsms = function(){
	var sms = new Smss();
	sms.content = $scope.smscontent;
	sms.$save(function(result){
    $scope.smss.push(result);
    $scope.smscontent = '';
	});
}

	

}]);



	

