App = angular.module('Signupapp', ['ui.bootstrap', 'ngRoute']);

/**
 * Angular Routes
 */
App.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : '/index.html',
            controller  : 'signup-controller.js'
        })

        // route for the products
});