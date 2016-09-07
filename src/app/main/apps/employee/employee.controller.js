(function() {
    'use strict';

    angular
        .module('app.employee')
        .controller('EmpController', EmpController);

    /** @ngInject */

    function EmpController($scope, $document, $timeout, $mdDialog, $mdMedia, $mdSidenav, EmpPms, $http) {

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
        $scope.selectedDev = {};
        $scope.selectBy = {};
        // vm.toggleSidenav = toggleSidenav;

        vm.responsiveReadPane = undefined;
        vm.activeMailPaneIndex = 0;
        vm.dynamicHeight = false;

        vm.scrollPos = 0;
        vm.scrollEl = angular.element('#content');

        $scope.empPms = EmpPms.data;
        $scope.position = EmpPms.position;
        $scope.selectedMail = $scope.empPms[0];
        $scope.selectedDev = $scope.position[0];
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
        // vm.selectMail = selectMail;
        $scope.selectDev = $scope.selectMail;
        $scope.selectBy = $scope.selectMail;
        vm.toggleStarred = toggleStarred;
        vm.toggleCheck = toggleCheck;

        $scope.modeShowPer = true;
        $scope.modeEditPer = true;


        $scope.FnEditPer = function() {

            $scope.modeShowPer = false;
            $scope.modeEditPer = false;
        }
        $scope.FnCancelPer = function() {
            $scope.modeShowPer = true;
            $scope.modeEditPer = true;
        }
        $scope.FnSavePer = function() {
            $scope.modeShowPer = true;
            $scope.modeEditPer = true;
        }

        $scope.modeShowFam = true;
        $scope.modeEditFam = true;

        $scope.FnEditFam = function() {

            $scope.modeShowFam = false;
            $scope.modeEditFam = false;
        }
        $scope.FnCancelFam = function() {
            $scope.modeShowFam = true;
            $scope.modeEditFam = true;
        }
        $scope.FnSaveFam = function() {
                $scope.modeShowFam = true;
                $scope.modeEditFam = true;
            }
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
        // $scope.Director = $filter("filter")($scope.empPms.personalInfo, { position: "Director" });
        // $scope.productType = "Director";
        // $scope.changeType = function(type) {
        //     $scope.productType = type;
        // };
        // $scope.Developer = true;
        // Read View
        // $scope.personalShow = false;
        ////////////////////////////////

        $scope.selected = $scope.position[0];
        $scope.selectedBy = "01_DI";
        console.log($scope.selectedBy);
        // /////////////////////////////////////////////
        $scope.showRead = true;
        $scope.showList = true;
        $scope.selectBy = function(select) {
            $scope.selected = select;

            if (select.name == "Director") {
                // alert("Director");
                $scope.selectedMail = [];
                $scope.showList = true;
                $scope.showRead = false;
                $scope.selectedBy = select.code;
                // console.log($scope.selectedBy);
            } else if (select.name == "Human Resource") {
                // alert("Human Resource");
                $scope.selectedMail = [];
                $scope.showList = true;
                $scope.showRead = false;
                $scope.selectedBy = select.code;
                // console.log($scope.selectedBy);
            } else if (select.name == "Accounting") {
                // alert("Accounting");
                $scope.selectedMail = [];
                $scope.showList = true;
                $scope.showRead = false;
                $scope.selectedBy = select.code;
                // console.log($scope.selectedBy);
            } else if (select.name == 'Developer') {
                // alert("Developer");
                $scope.selectedMail = [];
                $scope.showList = true;
                $scope.showRead = false;
                $scope.selectedBy = select.code;
                // console.log($scope.selectedBy);
            } else if (select.name == "System Analyst") {
                // alert("System Analyst");
                $scope.selectedMail = [];
                $scope.showList = true;
                $scope.showRead = false;
                $scope.selectedBy = select.code;
                // console.log($scope.selectedBy);
            }
        }

        // $scope.selectDev = function(mail) {


        //     if (mail.name == "Director") {
        //         alert("Error Your Choose Director");
        //     } else if (mail.name == "Human Resource") {
        //         alert("Error Your Choose Human Resource");
        //     } else if (mail.name == "Accounting") {
        //         alert("Error Your Choose Accounting");
        //     } else if (mail.name == "Developer") {
        //         alert("Developer");
        //         $scope.selectedMail = $scope.empPms[0];
        //         $scope.selectedDev = $scope.selectedMail;
        //     } else if (mail.name == "System Analyst") {
        //         alert("Error Your Choose System Analyst");
        //     }

        //     console.log(mail.name);
        // }


        $scope.selectMail = function(mail) {
            console.log(mail);
            $scope.selectedMail = mail;
            $scope.showRead = true;
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

                $scope.checked.splice(idx, 1);
            } else {
                $scope.checked.push(mail);
            }
        }

        /**
         * Return checked status of the mail
         *
         * @param mail
         * @returns {boolean}
         */
        function isChecked(mail) {

            return $scope.checked.indexOf(mail) > -1;
        }

        /**
         * Check all
         */
        function checkAll() {
            if (vm.allChecked) {

                $scope.checked = [];
                vm.allChecked = false;
            } else {
                angular.forEach($scope.empPms, function(mail) {
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

        // function composeDialog(ev) {
        //     $mdDialog.show({
        //         controller: 'ComposeDialogController',
        //         controllerAs: 'vm',
        //         locals: {
        //             selectedMail: undefined
        //         },
        //         templateUrl: 'app/main/apps/employee/dialogs/compose/compose-dialog.html',
        //         parent: angular.element($document.body),
        //         targetEvent: ev,
        //         clickOutsideToClose: true
        //     });
        // }
        ///////////////////////////////////////
        $scope.GetAllData = function(EmpPms) {
            $http.get('/app/data/employee/empPms.json')
                .success(function(data) {
                    $scope.response = data;
                    console.log($scope.response);
                })
                .error(function(data) {
                    console.log($scope.response);
                });
        };
        ////////////  Certificate  ////////////

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

        $scope.toggleSidenav = function(sidenavId) {
            $mdSidenav(sidenavId).toggle();
        }
    }
})();
