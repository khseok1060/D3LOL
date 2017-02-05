angular.module('searchService', [])
	.factory('nickNameInfo', function($http) {
		var search = function(nickName){
			return $http({
				method : 'GET',
				url : '/search',
				params : { keyword : nickName }
			})
			.then(function(res){
				return res.data;
			});
		}

		return {
			search : search
		};	
	
	});