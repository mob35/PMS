(function() {
    'use strict';

    angular
        .module('app.employee')
        .controller('RegardDialogController', RegardDialogController);

    /** @ngInject */
    function RegardDialogController($mdDialog, selectedEmp, $scope, benefitsMasterService, employeeService) {


        $scope.originalselectedEmp = selectedEmp;
        $scope.selectedEmp = {};
        angular.copy(selectedEmp, $scope.selectedEmp);
        $scope.newBnf = {};
        //////////////////////////////////////////////////////////call service method////////////////////////////////////////////////
        console.log($scope.selectedEmp.RegardInfo);


        benefitsMasterService.getAll().then(function(res) {
            $scope.benefitsList = res.data;
        }, function(err) {
            console.log(err);
        });


        $scope.addBenefitsList = function() {
            var teamIsNew = $scope.selectedEmp.BenefitsInfo.indexOf($scope.newBnf) == -1;
            if (teamIsNew) {
                $scope.selectedEmp.BenefitsInfo.push($scope.newBnf);
            }
            console.log($scope.newBnf);
            console.log($scope.selectedEmp.BenefitsInfo);
        }

        $scope.saveRegardEmployee = function() {
            employeeService.putRegradEmp($scope.selectedEmp).then(function(res) {
                angular.copy($scope.selectedEmp, selectedEmp);
                $scope.closeDialog();
            }, function(err) {
                console.log(err);
            });
            console.log($scope.selectedEmp.RegardInfo);
        }

        $scope.cancelRegardEmp = function() {
            angular.copy(selectedEmp, $scope.selectedEmp);
            $scope.closeDialog();
        }

        $scope.deleteBnf = function(bnfID) {
            for (var i = 0; i < $scope.selectedEmp.BenefitsInfo.length; i++) {
                if ($scope.selectedEmp.BenefitsInfo[i].BnID === bnfID) {
                    $scope.selectedEmp.BenefitsInfo.splice(i, 1);
                    break;
                }
            }

        }
        // 
        $scope.dateSwitch = true;
        $scope.dateSwitchEdit = function() {
             $scope.dateSwitch = false;
            
        }

        $scope.closeDialog = function() {
            $mdDialog.hide();
        }

    }

})();
