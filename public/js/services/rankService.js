angular.module('rankService', [])
	.factory('rankInfo', function($http) {
		var search = function(){
			return $http({
				method : 'GET',
				url : '/search'
				// params : { keyword : nickName }
			})
			.then(function(res){
				return res.data;
			});
		}

		return {
			search : search
		};	
	
	});