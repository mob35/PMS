(function() {
    'use strict';

    angular
        .module('app.employee')
        .controller('DeductionDialogController', DeductionDialogController);

    /** @ngInject */
    function DeductionDialogController($mdDialog, $scope, selectedMail, employeeService) {
        $scope.newDeduc = selectedMail;
        $scope.selectedMail = {};
        angular.copy(selectedMail, $scope.selectedMail);


        //////////////////////////////////////////////////////custom///////////////////////////////
        $scope.deduction = {
            "EmpID": $scope.newDeduc.EmpID,
            "DetailDe": "",
            "AmountDe": "",
            "StartDateDe": "",
            "EndDateDe": ""

        };
        // 
        $scope.addDeduction = function() {
            $scope.newDeduc.DeductionInfo.push($scope.deduction);
            console.log($scope.newDeduc.EmpID);
            console.log($scope.newDeduc.DeductionInfo);
            $scope.deduction = {
                "DetailDe": "",
                "AmountDe": "",
                "StartDateDe": "",
                "EndDateDe": ""
            }

        };
        // 
        $scope.removeDeduction = function(index) {
            // console.log("TEST");
            $scope.newDeduc.DeductionInfo.splice(index, 1);
        };
        // 
        $scope.saveDeduction = function() {
            employeeService.putDeduction($scope.newDeduc).then(function(res) {
                $scope.closeDialog();
            }, function(err) {
                console.log(err);
            });
            console.log($scope.newDeduc);
        };
        // 

        $scope.closeDialog = function() {
            $mdDialog.hide();
        }
    } //end controler

})();
