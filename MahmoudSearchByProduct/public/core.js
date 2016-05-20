/* Create Angular App Instance */
App = angular.module('shopping', ['ui.bootstrap', 'ngRoute']);

/**
 * Angular Routes
 */
App.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : '/partials/main.html',
            controller  : 'mainCtrl'
        })

        // route for the products page
        .when('/products', {
            templateUrl : '/partials/products.html',
            controller  : 'productsCtrl'
        })
        
         .when('/OmarTaher', {
            templateUrl : '/partials/OmarTaher.html'
        })
         .when('/SalmaGamal', {
            templateUrl : '/partials/SalmaGamal.html',

        });
        

});
