angular.module('searchCtrl', [])
	.controller('searchController', ['$scope', 'nickNameInfo', function($scope, nickNameInfo) {
		$scope.keyword = '';
		$scope.found;
		$scope.search = function(nickName){
			console.log('enter!')
			$scope.found = nickNameInfo.search(nickName);	
		};

	
	}]);