angular.module('searchCtrl', [])
	.controller('searchController', function($scope, searchService) {

		$scope.keyword = '';
		$scope.search = function(nickName){
			searchService.search(nickName);
		};


	});