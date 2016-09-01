(function() {
    'use strict';

    angular
        .module('app.benefitsMaster')
        .controller('benefitDialogController', benefitDialogController);

    /** @ngInject */
    function benefitDialogController($mdDialog, benefitsMaster, bnfName, index, $scope,$rootScope) {
        $scope.bnfName = bnfName;
        $scope.index = index;
        $scope.showBenefitsName = bnfName;

        $scope.closeDialog = function() {
            $mdDialog.hide();
        }

        $scope.saveNewBenefits = function(bnf) {
            $scope.benefitsMasterList = benefitsMaster.benefitsList;
            $scope.benefitsMasterList.push({
                "bnfID": benefitsMaster.benefitsList.length + 1,
                "bnfName": bnf.benefitsName,
                "bnfDes": bnf.benefitsDetail,
                "bnfSubDesc": [{
                    "bnfsdName": bnf.subBenefitsDetail1
                }, {
                    "bnfsdName": bnf.subBenefitsDetail2
                }]

            });
            $scope.closeDialog();
        }

        $scope.deleteBenefits = function (){
            $scope.benefitsMasterList = benefitsMaster.benefitsList;
            for (var i = 0; i < benefitsMaster.benefitsList.length; i++) {
                if ($scope.index === benefitsMaster.benefitsList[i].bnfID) {
                    $scope.benefitsMasterList.splice(i, 1);
                    break;
                }
            }
            $rootScope.bnfName = '';
            $rootScope.bnfDes = '';
            $rootScope.bnfSubDescList = '';
            $scope.closeDialog();
        }
    }


})();
