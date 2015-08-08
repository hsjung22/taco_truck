var myAppModule = angular.module('myApp', ['ngRoute']);

myAppModule.config(function ($routeProvider) {
	$routeProvider
		.when('/',{
			templateUrl: 'partials/index.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});