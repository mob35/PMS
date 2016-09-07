(function() {
    'use strict';

    angular
        .module('app.benefitsMaster')
        .controller('benefitsMasterController', benefitsMasterController);

    /** @ngInject */

    function benefitsMasterController($scope, $rootScope, $document, $timeout, $mdDialog, $mdMedia, $mdSidenav, benefitsMasterService) {

        $scope.colors = ['blue-bg', 'blue-grey-bg', 'orange-bg', 'pink-bg', 'purple-bg'];
        $scope.dynamicHeight = false;
        $scope.selectBenefitsDetail = selectBenefitsDetail;
        $scope.setCardBenefitShow = false;
        $scope.setCardBenefitEdit = true;
        $scope.selectedItem = {};

        //////////////////////////////////////////////////////////////////////call service method//////////////////////
        benefitsMasterService.getAll().then(function(res) {
            $scope.benefitsList = res.data;
        }, function(err) {
            console.log(err);
        });

        function selectBenefitsDetail(bnf) {
            $scope.originalSelectItem = bnf;
            angular.copy(bnf, $scope.selectedItem);
        }

        $scope.showConfirmDeleteBenefits = function(ev) {
            $mdDialog.show({
                controller: 'benefitDialogController',
                controllerAs: 'vm',
                locals: {
                    selectedItem: $scope.selectedItem

                },
                templateUrl: 'app/main/apps/benefitsMaster/dialogs/compose/deleteBenefits.html',
                parent: angular.element($document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
            $scope.setHeader = 'Delete Benefits';
        }

        $scope.composeDialog = function(ev) {
            $mdDialog.show({
                controller: 'benefitDialogController',
                controllerAs: 'vm',
                locals: {
                    selectedItem: $scope.selectedItem
                },
                templateUrl: 'app/main/apps/benefitsMaster/dialogs/compose/benefits.html',
                parent: angular.element($document.body),
                targetEvent: ev,
                clickOutsideToClose: false
            });
            $scope.setHeader = 'New Benefits';
        }

        // Edit inline
        $scope.editBenefitInline = function(ev) {
            $scope.setCardBenefitShow = true;
            $scope.setCardBenefitEdit = false;
        }
        $scope.cancelEditBenefitsInline = function(ev) {
            angular.copy($scope.originalSelectItem, $scope.selectedItem);
            $scope.setCardBenefitShow = false;
            $scope.setCardBenefitEdit = true;

        }
        $scope.saveEditBenefitsInline = function() {
                benefitsMasterService.put($scope.selectedItem).then(function(res) {
                    angular.copy($scope.selectedItem, $scope.originalSelectItem);

                }, function(err) {
                    console.log(err);
                })
                $scope.setCardBenefitShow = false;
                $scope.setCardBenefitEdit = true;

            }
            ////////////////////////////////////////////////////////////////Template////////////////////////////////////////////////////
        $scope.$watch(function() {
            return $mdMedia('xs');
        }, function(current) {
            $scope.dynamicHeight = current;
        });
    }
})();
