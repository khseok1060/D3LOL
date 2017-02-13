angular.module('rankCtrl', [])
	.controller('rankController', ['$scope', 'rankInfo', function($scope, rankInfo) {

		$scope.ranks = rankInfo.search();
	
	}]);