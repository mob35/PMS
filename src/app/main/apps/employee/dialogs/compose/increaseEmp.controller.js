(function() {
    'use strict';

    angular
        .module('app.employee')
        .controller('IncreaseDialogController', IncreaseDialogController);

    /** @ngInject */
    function IncreaseDialogController($mdDialog, $scope, selectedMail, employeeService) {
        $scope.newIncre = selectedMail;
        $scope.selectedMail = {};
        angular.copy(selectedMail, $scope.selectedMail);
        // $scope.newIncre = {};
        console.log($scope.newIncre.IncreaseInfo);

        //////////////////////////////////////////////////////////call service method////////////////////////////////////////////////


        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // $scope.increase = [];
        $scope.increase = {
            "EmpID": $scope.newIncre.EmpID,
            "DetailIn": "",
            "AmountIn": "",
            "StartDateIn": "",
            "EndDateIn": ""

        };

        console.log($scope.newIncre);


        $scope.addIncrease = function() {
            $scope.newIncre.IncreaseInfo.push($scope.increase);
            console.log($scope.newIncre.EmpID);
            console.log($scope.newIncre.IncreaseInfo);
            $scope.increase = {
                "DetailIn": "",
                "AmountIn": "",
                "StartDateIn": "",
                "EndDateIn": ""
            }

        };

        $scope.removeIncre = function(index) {
            // console.log("TEST");
            $scope.newIncre.IncreaseInfo.splice(index, 1);
        };

        $scope.saveIncrease = function() {
            employeeService.putIncrease($scope.newIncre).then(function(res) {
                $scope.closeDialog();
            }, function(err) {
                console.log(err);
            });
            console.log($scope.newIncre);
        };
        // 
        


        $scope.closeDialog = function() {
            $mdDialog.hide();
        }
    } //end controler

})();
