//bootstrap application
var app = angular.module('aidangee', ['ngRoute', 'directives', 'ui.bootstrap']);

//set configuration for routes
	app.config(['$routeProvider', 
	function($routeProvider){

		$routeProvider.when('/login',
		{
			templateUrl: 'login/index.html',
			controller: 'loginCntl',
			title:"Login"
		});
		$routeProvider.when('/examples',
		{
			templateUrl: 'exmaples/index.html',
			controller: 'examplesCntl',
			title: 'Examples'
		});
		$routeProvider.when('/blog',
		{
			templateUrl: 'blog/index.html',
			controller: 'blogCntl',
			title: 'Blog'
		});
		//redirect to login if url route not set
		$routeProvider.otherwise(
		{
			redirectTo: '/home',
			templateUrl: 'home/index.html',
			controller: 'homeCntl'	

		});



	}]);
		