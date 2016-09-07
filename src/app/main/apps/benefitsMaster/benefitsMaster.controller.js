(function() {
    'use strict';

    angular
        .module('app.benefitsMaster')
        .controller('benefitsMasterController', benefitsMasterController);

    /** @ngInject */

    function benefitsMasterController($scope, $rootScope, $document, $timeout, $mdDialog, $mdMedia, $mdSidenav, benefitsMaster, benefitsMasterService) {

        var vm = this;
        // Data
        $scope.accounts = {
            'creapond': 'johndoe@creapond.com',
            'withinpixels': 'johndoe@withinpixels.com'
        };
        $scope.checked = [];
        $scope.colors = ['blue-bg', 'blue-grey-bg', 'orange-bg', 'pink-bg', 'purple-bg'];
        $scope.selectedAccount = 'creapond';
        $scope.selectedMail = {};
        // vm.selectedDev = {};
        // vm.responsiveReadPane = undefined;
        // vm.activeMailPaneIndex = 0;
        $scope.dynamicHeight = false;

        // vm.scrollPos = 0;
        // vm.scrollEl = angular.element('#content');

        $scope.benefitsMaster = benefitsMaster.data;
        $scope.position = benefitsMaster.position;
        $scope.selectedMail = $scope.benefitsMaster[0];
        // vm.selectedDev = $scope.position[0];
        // vm.selectedMailShowDetails = false;
        // vm.checkAll = checkAll;
        // vm.closeReadPane = closeReadPane;
        // vm.certificateDialog = certificateDialog;
        // vm.deleteDialog = deleteDialog;
        // vm.regardDialog = regardDialog;
        // vm.evaluationDialog = evaluationDialog;
        // vm.isChecked = isChecked;
        // vm.selectMail = selectMail;
        // vm.selectDev = selectMail;
        // vm.toggleStarred = toggleStarred;
        // vm.toggleCheck = toggleCheck;
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

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////

        // Watch screen size to activate responsive read pane
        // $scope.$watch(function() {
        //     return $mdMedia('gt-md');
        // }, function(current) {
        //     vm.responsiveReadPane = !current;
        // });

        // Watch screen size to activate dynamic height on tabs
        $scope.$watch(function() {
            return $mdMedia('xs');
        }, function(current) {
            $scope.dynamicHeight = current;
        });



        

        function selectBenefitsDetail(bnf) {
            //$scope.selectedItem = bnf;
            $scope.index = bnf.BnID;
            $rootScope.bnfName = bnf.NameBN;
            // $rootScope.bnfDes = bnf.DetailBN;
            // $rootScope.bnfSubDescList = bnf.bnfSubDesc;
            // alert($scope.index);
            $scope.originalSelectItem = bnf;
            angular.copy(bnf, $scope.selectedItem);
        }

        $scope.showConfirmDeleteBenefits = function(ev) {
            $mdDialog.show({
                controller: 'benefitDialogController',
                controllerAs: 'vm',
                locals: {
                    benefitsMaster: benefitsMaster,
                    bnfName: $rootScope.bnfName,
                    index: $scope.index
                },
                templateUrl: 'app/main/apps/benefitsMaster/dialogs/compose/deleteBenefits.html',
                parent: angular.element($document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
            $scope.setHeader = 'Delete Benefits';
        }

        function selectDev(mail) { vm.selectedDev = mail; }

        function selectMail(mail) {
            $scope.selectedMail = mail;

            $timeout(function() {
                // If responsive read pane is
                // active, navigate to it
                if (angular.isDefined(vm.responsiveReadPane) && vm.responsiveReadPane) {
                    vm.activeMailPaneIndex = 1;
                }

                // Store the current scrollPos
                vm.scrollPos = vm.scrollEl.scrollTop();

                // Scroll to the top
                vm.scrollEl.scrollTop(0);
            });

        }

        function closeReadPane() {
            if (angular.isDefined(vm.responsiveReadPane) && vm.responsiveReadPane) {
                vm.activeMailPaneIndex = 0;

                $timeout(function() {
                    vm.scrollEl.scrollTop(vm.scrollPos);
                }, 650);
            }
        }

        function toggleStarred(mail, event) {
            event.stopPropagation();
            emp.starred = !emp.starred;
        }

        // function toggleCheck(mail, event) {
        //     if (event) {
        //         event.stopPropagation();
        //     }

        //     var idx = $scope.checked.indexOf(mail);

        //     if (idx > -1) {

        //         $scope.checked.splice(idx, 1);
        //     } else {
        //         $scope.checked.push(mail);
        //     }
        // }

        // function isChecked(mail) {

        //     return $scope.checked.indexOf(mail) > -1;
        // }

        // function checkAll() {
        //     if (vm.allChecked) {

        //         $scope.checked = [];
        //         vm.allChecked = false;
        //     } else {
        //         angular.forEach($scope.empPms, function(mail) {
        //             if (!isChecked(mail)) {
        //                 toggleCheck(mail);
        //             }
        //         });

        //         vm.allChecked = true;
        //     }
        // }

        // ======= create
        $scope.composeDialog = function(ev) {
                $mdDialog.show({
                    controller: 'benefitDialogController',
                    controllerAs: 'vm',
                    locals: {
                        benefitsMaster: $scope.benefitsList,
                        bnfName: $rootScope.bnfName,
                        index: $scope.index
                    },
                    templateUrl: 'app/main/apps/benefitsMaster/dialogs/compose/benefits.html',
                    parent: angular.element($document.body),
                    targetEvent: ev,
                    clickOutsideToClose: false
                });
                $scope.setHeader = 'New Benefits';
            }
            // Edit dialog
        $scope.editDialog = function(ev) {
                $mdDialog.show({
                    controller: 'ComposeDialogController',
                    controllerAs: 'vm',
                    locals: {
                        selectedMail: undefined
                    },
                    templateUrl: 'app/main/apps/benefitsMaster/dialogs/compose/benefits.html',
                    parent: angular.element($document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true
                });
                $scope.setHeader = 'Edit Benefits';
                console.log('Edit');
            }
            // Edit inline
        $scope.editBenefitInline = function(ev) {
            $scope.setCardBenefitShow = true;
            $scope.setCardBenefitEdit = false;
        }
        $scope.cancelEditBenefitsInline = function(ev) {
            console.log('cancel');
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
                    //$scope.originalSelectItem = $scope.selectedItem;
                console.log('save');
                $scope.setCardBenefitShow = false;
                $scope.setCardBenefitEdit = true;

            }
            ////////////  Certificate  ////////////
        // function certificateDialog(ev) {
        //     $mdDialog.show({
        //         controller: 'CertificateDialogController',
        //         controllerAs: 'vm',
        //         locals: {
        //             selectedMail: undefined
        //         },
        //         templateUrl: 'app/main/apps/benefitsMaster/dialogs/compose/certificate.html',
        //         parent: angular.element($document.body),
        //         targetEvent: ev,
        //         clickOutsideToClose: true
        //     });
        // }
        ////////////  Delete  ////////////
        function deleteDialog(ev) {
            $mdDialog.show({
                controller: 'DeleteDialogController',
                controllerAs: 'vm',
                locals: {
                    selectedMail: undefined
                },
                templateUrl: 'app/main/apps/benefitsMaster/dialogs/compose/deleteEmp.html',
                parent: angular.element($document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
        }
        ////////////  Reguad  ////////////
        function regardDialog(ev) {
            $mdDialog.show({
                controller: 'RegardDialogController',
                controllerAs: 'vm',
                locals: {
                    selectedMail: undefined
                },
                templateUrl: 'app/main/apps/benefitsMaster/dialogs/compose/regardEmp.html',
                parent: angular.element($document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
        }
        ////////////  Evaluation  ////////////
        function evaluationDialog(ev) {
            $mdDialog.show({
                controller: 'EvaluationDialogController',
                controllerAs: 'vm',
                locals: {
                    selectedMail: undefined
                },
                templateUrl: 'app/main/apps/benefitsMaster/dialogs/compose/evaluationEmp.html',
                parent: angular.element($document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
        }

        $scope.toggleSidenav = function(sidenavId) {
            $mdSidenav(sidenavId).toggle();
        }
    }
})();
