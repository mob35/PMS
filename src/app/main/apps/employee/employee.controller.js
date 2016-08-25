(function() {
    'use strict';

    angular
        .module('app.employee')
        .controller('EmpController', EmpController);

    /** @ngInject */
<<<<<<< HEAD
    function EmpController($scope, $document, $timeout, $mdDialog, $mdMedia, $mdSidenav, Inbox) {
=======
    function EmpController($scope, $document, $timeout, $mdDialog, $mdMedia, $mdSidenav, EmpPms) {
>>>>>>> c1c3ae6a291f24a97fbd4ce350807c7c8d726d83
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
        vm.selectedDev = {};
        // vm.toggleSidenav = toggleSidenav;

        vm.responsiveReadPane = undefined;
        vm.activeMailPaneIndex = 0;
        vm.dynamicHeight = false;

        vm.scrollPos = 0;
        vm.scrollEl = angular.element('#content');

        $scope.empPms = EmpPms.data;
        $scope.position = EmpPms.position;
        $scope.selectedMail = $scope.empPms[0];
        vm.selectedDev = $scope.position[0];
        vm.selectedMailShowDetails = false;

        // Methods
        vm.checkAll = checkAll;
        vm.closeReadPane = closeReadPane;
        // vm.composeDialog = composeDialog;
        vm.certificateDialog = certificateDialog;
        vm.deleteDialog = deleteDialog;
        vm.regardDialog = regardDialog;
        vm.evaluationDialog = evaluationDialog;
        vm.isChecked = isChecked;
        // vm.replyDialog = replyDialog;
        vm.selectMail = selectMail;
        vm.selectDev = selectMail;
        vm.toggleStarred = toggleStarred;
        vm.toggleCheck = toggleCheck;

        //////////

        // Watch screen size to activate responsive read pane
        $scope.$watch(function() {
            return $mdMedia('gt-md');
        }, function(current) {
            vm.responsiveReadPane = !current;
        });

        // Watch screen size to activate dynamic height on tabs
        $scope.$watch(function() {
            return $mdMedia('xs');
        }, function(current) {
            vm.dynamicHeight = current;
        });

        /**
         * Select mail
         *
         * @param mail
         */
        function selectDev(mail) { vm.selectedDev = mail; }
<<<<<<< HEAD

        function selectMail(mail) {
            vm.selectedMail = mail;

=======

        function selectMail(mail) {
            $scope.selectedMail = mail;

>>>>>>> c1c3ae6a291f24a97fbd4ce350807c7c8d726d83
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

        /**
         * Close read pane
         */
        function closeReadPane() {
            if (angular.isDefined(vm.responsiveReadPane) && vm.responsiveReadPane) {
                vm.activeMailPaneIndex = 0;

                $timeout(function() {
                    vm.scrollEl.scrollTop(vm.scrollPos);
                }, 650);
            }
        }

        /**
         * Toggle starred
         *
         * @param mail
         * @param event
         */
        function toggleStarred(mail, event) {
            event.stopPropagation();
            emp.starred = !emp.starred;
        }

        /**
         * Toggle checked status of the mail
         *
         * @param mail
         * @param event
         */
        function toggleCheck(mail, event) {
            if (event) {
                event.stopPropagation();
            }

            var idx = $scope.checked.indexOf(mail);

            if (idx > -1) {
<<<<<<< HEAD
                vm.checked.splice(idx, 1);
            } else {
                vm.checked.push(mail);
=======
                $scope.checked.splice(idx, 1);
            } else {
                $scope.checked.push(mail);
>>>>>>> c1c3ae6a291f24a97fbd4ce350807c7c8d726d83
            }
        }

        /**
         * Return checked status of the mail
         *
         * @param mail
         * @returns {boolean}
         */
        function isChecked(mail) {
<<<<<<< HEAD
            return vm.checked.indexOf(mail) > -1;
=======
            return $scope.checked.indexOf(mail) > -1;
>>>>>>> c1c3ae6a291f24a97fbd4ce350807c7c8d726d83
        }

        /**
         * Check all
         */
        function checkAll() {
            if (vm.allChecked) {
<<<<<<< HEAD
                vm.checked = [];
                vm.allChecked = false;
            } else {
                angular.forEach(vm.inbox, function(mail) {
=======
                $scope.checked = [];
                vm.allChecked = false;
            } else {
                angular.forEach($scope.empPms, function(mail) {
>>>>>>> c1c3ae6a291f24a97fbd4ce350807c7c8d726d83
                    if (!isChecked(mail)) {
                        toggleCheck(mail);
                    }
                });

                vm.allChecked = true;
            }
        }

        /**
         * Open compose dialog
         *
         * @param ev
         */
<<<<<<< HEAD
        function composeDialog(ev) {
            $mdDialog.show({
                controller: 'ComposeDialogController',
                controllerAs: 'vm',
                locals: {
                    selectedMail: undefined
                },
                templateUrl: 'app/main/apps/employee/dialogs/compose/compose-dialog.html',
                parent: angular.element($document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
        }
        ////////////  Certificate  ////////////
=======
        $scope.composeDialog = function(ev) {
                $mdDialog.show({
                    controller: 'ComposeDialogController',
                    controllerAs: 'vm',
                    locals: {
                        selectedMail: undefined
                    },
                    templateUrl: 'app/main/apps/employee/dialogs/compose/compose-dialog.html',
                    parent: angular.element($document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true
                });
            }
            ////////////  Certificate  ////////////
>>>>>>> c1c3ae6a291f24a97fbd4ce350807c7c8d726d83
        function certificateDialog(ev) {
            $mdDialog.show({
                controller: 'CertificateDialogController',
                controllerAs: 'vm',
                locals: {
                    selectedMail: undefined
                },
                templateUrl: 'app/main/apps/employee/dialogs/compose/certificate.html',
                parent: angular.element($document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
        }
        ////////////  Delete  ////////////
        function deleteDialog(ev) {
            $mdDialog.show({
                controller: 'DeleteDialogController',
                controllerAs: 'vm',
                locals: {
                    selectedMail: undefined
                },
                templateUrl: 'app/main/apps/employee/dialogs/compose/deleteEmp.html',
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
                templateUrl: 'app/main/apps/employee/dialogs/compose/regardEmp.html',
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
                templateUrl: 'app/main/apps/employee/dialogs/compose/evaluationEmp.html',
                parent: angular.element($document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
        }

        /**
         * Open reply dialog
         *
         * @param ev
         */
        // function replyDialog(ev)
        // {
        //     $mdDialog.show({
        //         controller         : 'ComposeDialogController',
        //         controllerAs       : 'vm',
        //         locals             : {
        //             selectedMail: vm.selectedMail
        //         },
        //         templateUrl        : 'app/main/apps/employee/dialogs/compose/compose-dialog.html',
        //         parent             : angular.element($document.body),
        //         targetEvent        : ev,
        //         clickOutsideToClose: true
        //     });
        // }

        /**
         * Open reply dialog
         *
         * @param ev
         */


        /**
         * Toggle sidenav
         *
         * @param sidenavId
         */
<<<<<<< HEAD
        function toggleSidenav(sidenavId) {
=======
        $scope.toggleSidenav = function(sidenavId) {
>>>>>>> c1c3ae6a291f24a97fbd4ce350807c7c8d726d83
            $mdSidenav(sidenavId).toggle();
        }
    }
})();
