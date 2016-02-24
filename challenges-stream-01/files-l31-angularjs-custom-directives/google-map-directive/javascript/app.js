var angular;

angular.module("myApp", ['ngRoute', 'MyControllers', 'MyDirectives']);

angular.module('myApp').config(function($routeProvider) {
	$routeProvider
		.when('/about', {
                  templateUrl: 'templates/about.html',
                  controller: 'AboutController'
        })
		.otherwise({redirectTo: '/'});
});