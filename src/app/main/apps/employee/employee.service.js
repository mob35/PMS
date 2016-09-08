(function() {
    'use strict';

    angular
        .module('app.employee')
        .service('employeeService', employeeService);

    function employeeService($q,$http) {
    	var url = "http://192.168.1.104/api/EmployeeDatas";

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
        };   

        this.putEmpData = function(employee){
        	var defer = $q.defer();
        	$http.put(url +'/'+employee.EmpID,employee).success(function(response){
        		defer.resolve(response);
        	})
        	.error(function(response){
        		defer.reject(response);
        	});
        	return defer.promise;
<<<<<<< HEAD
        } 

        this.putRegradEmp = function(selectedEmp){
            var defer = $q.defer();
            $http.put(url +'/'+selectedEmp.EmpID,selectedEmp).success(function(response){
=======
        };
        this.deleteEmpData = function(selectEmpForDel){
            // console.log(selectEmpForDel.EmpID);
            var defer = $q.defer();
            $http.delete(url +'/'+selectEmpForDel.EmpID).success(function(response){
>>>>>>> 4ae3b7f6cb0fd090d8b51e14bcdc222c570dbb00
                defer.resolve(response);
            })
            .error(function(response){
                defer.reject(response);
            });
            return defer.promise;
<<<<<<< HEAD
        } 
=======
        };  
>>>>>>> 4ae3b7f6cb0fd090d8b51e14bcdc222c570dbb00
    }
})();
