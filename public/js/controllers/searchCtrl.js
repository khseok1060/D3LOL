angular.module('searchCtrl', [])
	.controller('searchController', ['$scope', 'nickNameInfo', function($scope, nickNameInfo) {

		$scope.keyword = '';
		$scope.search = function(nickName){
			nickNameInfo.search(nickName);
		};


	}]);