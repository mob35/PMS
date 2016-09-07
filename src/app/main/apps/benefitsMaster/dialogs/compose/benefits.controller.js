(function() {
    'use strict';

    angular
        .module('app.benefitsMaster')
        .controller('benefitDialogController', benefitDialogController);

    /** @ngInject */
    function benefitDialogController($mdDialog, $scope, $rootScope, $http, $templateCache,selectedItem,benefitsList, benefitsMasterService) {
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
                benefitsList.push({
                "BnID": res.BnID,
                "NameBN": res.NameBN,
                "DetailBN": res.DetailBN
            });
                $scope.closeDialog();
            }, function(err) {
                console.log(err);
            });
        }

        $scope.deleteBenefits = function() {
            benefitsMasterService.delete(selectedItem).then(function(res) {
                for (var i = 0; i < benefitsList.length; i++) {
                if (selectedItem.BnID === benefitsList[i].BnID) {
                    benefitsList.splice(i, 1);
                    break;
                }
            }
            selectedItem.NameBN = '';
            selectedItem.DetailBN = '';
            $scope.closeDialog();
            }, function(err) {
                console.log(err);
            });
            
        }
    }
})();
