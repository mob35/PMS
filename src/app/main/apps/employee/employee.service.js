(function() {
    'use strict';

    angular
        .module('app.employee')
        .service('employeeService', employeeService);

    function employeeService($q, $http) {
        var url = "http://192.168.1.114:8080/api/EmployeeDatas";

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
            //  defer.resolve(data);
            // })
            // .error(function(err){
            //  defer.reject(err);
            // });

            return defer.promise;
        };

        this.putEmpData = function(employee) {
            console.log(employee);
            var defer = $q.defer();
            $http.put(url + '/' + employee._id, employee).success(function(response) {
                    defer.resolve(response);
                })
                .error(function(response) {
                    defer.reject(response);

                });
            return defer.promise;

        }
        this.putRegradEmp = function(selectedEmp) {
            console.log(JSON.stringify(selectedEmp));
            var defer = $q.defer();
            $http.put(url + '/' + selectedEmp._id, selectedEmp).success(function(response) {

                    defer.resolve(response);
                })
                .error(function(response) {
                    defer.reject(response);
                });
            return defer.promise;

        };
        // this.putEvaluationEmp = function(selectedMail) {
        //     console.log(JSON.stringify(selectedMail));
        //     var defer = $q.defer();
        //     $http.put(url + '/' + selectedMail.EmpID, selectedMail).success(function(response) {

        //             defer.resolve(response);
        //         })
        //         .error(function(response) {
        //             defer.reject(response);
        //         });
        //     return defer.promise;

        // };
        this.putIncrease = function(selectedMail) {
            console.log(JSON.stringify(selectedMail));
            var defer = $q.defer();
            $http.put(url + '/' + selectedMail._id, selectedMail).success(function(response) {

                    defer.resolve(response);
                })
                .error(function(response) {
                    defer.reject(response);
                });
            return defer.promise;

        };
        this.putDeduction = function(selectedMail) {
            console.log(JSON.stringify(selectedMail));
            var defer = $q.defer();
            $http.put(url + '/' + selectedMail._id, selectedMail).success(function(response) {

                    defer.resolve(response);
                })
                .error(function(response) {
                    defer.reject(response);
                });
            return defer.promise;

        };
        this.deleteEmpData = function(selectEmpForDel) {
            var defer = $q.defer();
            $http.delete(url + '/' + selectEmpForDel._id).success(function(response) {

                    defer.resolve(response);
                })
                .error(function(response) {
                    defer.reject(response);
                });
            return defer.promise;

        };

        this.postEmp = function(empDataList) {
            var defer = $q.defer();
            $http.post(url,empDataList).success(function(response) {

                    defer.resolve(response);
                })
                .error(function(response) {
                    defer.reject(response);
                });
            return defer.promise;

        };
    }
})();
