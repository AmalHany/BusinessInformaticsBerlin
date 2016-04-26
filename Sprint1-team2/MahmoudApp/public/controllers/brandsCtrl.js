/**
 * Products Controller
 */

App.controller('brandsCtrl', function($scope, BrandsSrv) {

$scope.chosenbrand = BrandsSrv.getSelectedBrand();

BrandsSrv.getBrand(BrandsSrv.getSelectedBrand()).success(function (data){
	$scope.brands = data;
	console.log('Mahmoud fil CTRL');
});

});