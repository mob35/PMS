(function() {
    'use strict';

    angular
        .module('app.benefitsMaster')
        .controller('benefitDialogController', benefitDialogController);

    /** @ngInject */
    function benefitDialogController($mdDialog, $scope, $rootScope, $http, $templateCache,selectedItem, benefitsMasterService) {
        $scope.showBenefitsName = selectedItem.NameBN;

        $scope.newData = {
            NameBN : '',
            DetailBN : ''
        };

        $scope.closeDialog = function() {
            $mdDialog.hide();
        }

        $scope.saveNewBenefits = function() {        
            benefitsMasterService.post($scope.newData).then(function(res) {
                $scope.benefitsMasterList = benefitsMaster;
                $scope.benefitsMasterList.push({
                "BnID": res.BnID,
                "NameBN": res.NameBN,
                "DetailBN": res.DetailBN
            });
                $scope.closeDialog();
            }, function(err) {
                console.log(err);
            })
        }

        $scope.deleteBenefits = function() {
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
