(function() {
    'use strict';

    angular
        .module('app.benefitsMaster')
        .service('benefitsMasterService', benefitsMasterService);

    function benefitsMasterService($q,$http) {
    	var url = "http://192.168.1.114:8080/api/BenefitsMasterDatas";

        this.getAll = function() {
        	var defer = $q.defer();
            var params = {};
            $http({
                method: 'GET',
                url: url
            }).then(function successCallback(response) {
            	defer.resolve(response);
            }, function errorCallback(response) {
                defer.reject(response);
            });

            // $http.get('app/data/employee/benefitsData.json')
            // .success(function(data){
            // 	defer.resolve(data);
            // })
            // .error(function(err){
            // 	defer.reject(err);
            // });

            return defer.promise;
        }   

        this.post = function(benefitsMaster){
        	var defer = $q.defer();
        	$http.post(url,benefitsMaster).success(function(response){
        		defer.resolve(response);
        	})
        	.error(function(response){
        		defer.reject(response);
        	});
        	return defer.promise;
        }

        this.put = function(benefitsMaster){
        	var defer = $q.defer();
        	$http.put(url +'/'+benefitsMaster.BnID,benefitsMaster).success(function(response){
        		defer.resolve(response);
        	})
        	.error(function(response){
        		defer.reject(response);
        	});
        	return defer.promise;
        }

        this.delete = function(benefitsMaster){
            var defer = $q.defer();
            $http.delete(url +'/'+benefitsMaster.BnID,benefitsMaster).success(function(response){
                defer.resolve(response);
            })
            .error(function(response){
                defer.reject(response);
            });
            return defer.promise;
        }
    }
})();
