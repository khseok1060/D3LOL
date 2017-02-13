angular.module('searchService', [])
	.factory('nickNameInfo', function($http){
		var search = function(nickName){
			return $http({
				method : 'GET',
				url : '/search',
				params : { keyword : nickName }
			})
			.then(function(res){
				console.log(111)
				return res.data;
			})
		}
		return {
			search : search
		}
	})