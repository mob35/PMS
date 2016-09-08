(function() {
    'use strict';

    angular
        .module('app.employee')
        .controller('RegardDialogController', RegardDialogController);

    /** @ngInject */
    function RegardDialogController($mdDialog, selectedEmp, $scope, benefitsMasterService,employeeService) {

        $scope.selectedEmp = selectedEmp;
        $scope.newBnf = {};
        //////////////////////////////////////////////////////////call service method////////////////////////////////////////////////

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
                $scope.closeDialog();
            }, function(err) {
                console.log(err);
            });
        }

        $scope.deleteBnf = function(bnfID) {
            for (var i = 0; i < $scope.selectedEmp.BenefitsInfo.length; i++) {
                if ($scope.selectedEmp.BenefitsInfo[i].BnID === bnfID) {
                    $scope.selectedEmp.BenefitsInfo.splice(i, 1);
                    break;
                }
            }

        }

        $scope.closeDialog = function() {
            $mdDialog.hide();
        }

    }

})();
