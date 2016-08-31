(function() {
    'use strict';

    angular
        .module('app.benefitsMaster')
        .controller('benefitDialogController', benefitDialogController);

    /** @ngInject */
    function benefitDialogController($mdDialog, benefitsMaster, $scope) {

        $scope.closeDialog = function() {
            $mdDialog.hide();
        }

        $scope.saveNewBenefits = function(bnf) {
            $scope.benefitsMasterList = benefitsMaster.benefitsList;



            $scope.benefitsMasterList.push({
                "bnfID": "1",
                "bnfName": bnf.benefitsName,
                "bnfDes": bnf.benefitsDetail,
                "bnfSubDesc": [{
                    "bnfsdName": bnf.subBenefitsDetail1
                }, {
                    "bnfsdName": bnf.subBenefitsDetail2
                }]

            });

            console.log($scope.benefitsMasterList);
            $scope.closeDialog();
        }
    }


})();
