app.controller('bDraftController', ['$scope', '$resource', function ($scope, $resource) {
	var bDraft = $resource('/api/bDrafts');

	bDraft.query(function (results) {
    $scope.businessdraft = results;
  });
$scope.businessdraft = []

	$scope.createBDraft = function () {
		var BDraft = new bDraft();
		BDraft.businessName = $scope.userBName;
		BDraft.productName = $scope.userProd;
		BDraft.brandName = $scope.userBrand;
		BDraft.price = $scope.userPrice;
		BDraft.about = $scope.userAbout;
		BDraft.$save(function (result){
			$scope.businessdraft.push(result);
			$scope.userBName = '';
			$scope.userProd = '';
			$scope.userBrand = '';
			$scope.userPrice = '';
			$scope.userAbout = '';
		});
	}
}]);