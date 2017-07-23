
var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/partial1.html'
	})
	.when('/partial2', {
		templateUrl: 'partials/partial2.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});
