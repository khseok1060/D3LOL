angular.module('searchService', [])
	.factory('nickName', function($http) {
		let search = function(nickName){
			return $http({
				method : 'GET',
				url : '/search',
				params : { keyword :nickName }
			})
			.then(function(res){
				return res.data;
			});
		}

		return {
			search : search
		};	
	
	});