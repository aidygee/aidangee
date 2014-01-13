//bootstrap application
var iplod = angular.module('iplod', ['ngRoute', 'directives', 'ui.bootstrap']);

//set configuration for routes
	iplod.config(['$routeProvider', 
	function($routeProvider){

		$routeProvider.when('/menu',
		{
			templateUrl: 'menu/index.html',
			controller: 'menuCntl',
			title:"Login"
		});
		$routeProvider.when('/incidents',
		{
			templateUrl: 'incidents/index.html',
			controller: 'incidentsCntl',
			title: 'Incidents'
		});
		//redirect to login if url route not set
		$routeProvider.otherwise(
		{
			redirectTo: '/menu',
			
		});


	}]);
		