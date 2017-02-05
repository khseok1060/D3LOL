angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/rank', {
			templateUrl: 'views/rank.html'
		})

		.when('/multiSearch', {
			templateUrl: 'views/multiSearch.html'
		})

		.when('/champion', {
			templateUrl: 'views/champion.html'
		})
		.when('/search', {
			templateUrl : 'views/search.html',
			controller : 'searchController'
		});


	$locationProvider.html5Mode(true);

}]);