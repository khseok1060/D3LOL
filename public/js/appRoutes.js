angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/rank', {
			templateUrl: 'views/rank.html',
			controller: 'rankController'
		})

		.when('/multiSearch', {
			templateUrl: 'views/multiSearch.html',
			controller: 'multiSearchController'
		})

		.when('/champion', {
			templateUrl: 'views/champion.html',
			controller: 'championController'	
		})
		.when('/search', {
			templateUrl : 'views/search.html',
			controller : 'searchController'
		});


	$locationProvider.html5Mode(true);

}]);