(function() {
    'use strict';

    angular
        .module('app.employee')
        .controller('EmpController', EmpController);

    /** @ngInject */

    // <<<<<<< HEAD
    //     function EmpController($scope, $document, $timeout, $mdDialog, $mdMedia, $mdSidenav, EmpPms,employeeService) {

    //         var vm = this;
    //         var serviceEmpData = employeeService.getData();
    //         console.log(serviceEmpData);
    // =======
    function EmpController($rootScope,$scope, $document, $timeout, $mdDialog, $mdMedia, $mdSidenav, EmpPms, employeeService) {

        var vm = this;

//////
$scope.selectedEmp = {};
$scope.selectedEmpCopy = {};
//////

        // Data
        $scope.accounts = {
            'creapond': 'johndoe@creapond.com',
            'withinpixels': 'johndoe@withinpixels.com'
        };
        $scope.checked = [];
        $scope.colors = ['blue-bg', 'blue-grey-bg', 'orange-bg', 'pink-bg', 'purple-bg'];
        $scope.selectedAccount = 'creapond';
        $scope.selectedMail = {};
        $scope.originalSelectedEmp = {};

        $scope.selectedEmpOriginal = {};
        // $scope.selectedDev = {};
        // $scope.selectBy = {};
        // vm.toggleSidenav = toggleSidenav;

        vm.responsiveReadPane = undefined;
        vm.activeMailPaneIndex = 0;
        vm.dynamicHeight = false;

        vm.scrollPos = 0;
        vm.scrollEl = angular.element('#content');

        $scope.empPms = EmpPms.data;
        $scope.position = EmpPms.position;

        // $scope.selectedDev = $scope.position[0];
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
        // $scope.selectDev = $scope.selectMail;
        // $scope.selectBy = $scope.selectMail;
        vm.toggleStarred = toggleStarred;
        vm.toggleCheck = toggleCheck;
        $scope.positions = [];

        //////////////////////////////////////////////////////////////////////call service method//////////////////////
        employeeService.getAll().then(function(res) {
            $scope.employeeList = res.data;

            for (var i = 0; i <= $rootScope.employeeList.length - 1; i++) {
                if ($rootScope.employeeList[i].PersonalInfo) {
                    if(!$rootScope.employeeList[i].PersonalInfo.Position){
                        $rootScope.employeeList[i].PersonalInfo.Position = "";
                    }
                    var teamIsNew = $scope.positions.indexOf($rootScope.employeeList[i].PersonalInfo.Position ? $rootScope.employeeList[i].PersonalInfo.Position : "") == -1;
                    if (teamIsNew) {

                        $scope.positions.push($rootScope.employeeList[i].PersonalInfo.Position ? $rootScope.employeeList[i].PersonalInfo.Position : "");
                    }
                }

            }

            $scope.selected = $scope.positions[0];
            // $scope.selectedMail = $scope.employeeList[0];


        }, function(err) {
            console.log(err);
        });

        ////////////////////////////////////////////////////////////SELECT//////////////////////////////////////////////////

        $scope.selectedEmployee = function(selectEmp) {

            $scope.selectedEmp = selectEmp;
            console.log($scope.selectedEmp);
            angular.copy(selectEmp, $scope.selectedEmpCopy);
            // $scope.selectEmpForDel = mail;
            // $scope.selectedEmp = mail;
            
            // console.log(mail);
        }


        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

        $scope.modeShowPer = true;
        $scope.modeEditPer = true;


        $scope.FnEditPer = function(ev) {

            $scope.modeShowPer = false;
            $scope.modeEditPer = false;
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


        $scope.showRead = true;
        $scope.showList = true;


        $scope.filterPos = function(pos) {
            //console.log(pos);
            if (pos.PersonalInfo) {
                return pos.PersonalInfo.Position == $scope.selected;
            }
            return false;
        };

        $scope.selectBy = function(select) {
            $scope.selected = select; 
            $scope.showList = true;
            $scope.showRead = false;

        }


        $scope.selectEmp = function(mail) {
            $scope.originalSelectedEmp = mail;
            angular.copy(mail, $scope.selectedMail);

            $scope.showRead = true;
            $scope.disabled = false;
        }
        $scope.FnSavePer = function() {
            // angular.copy($scope.selectedMail, $scope.originalSelectedEmp);
            employeeService.putEmpData($scope.selectedMail).then(function(res) {
                angular.copy($scope.selectedMail, $scope.originalSelectedEmp);

            }, function(err) {
                console.log(err);
            })
            $scope.modeShowPer = true;
            $scope.modeEditPer = true;
        }

        $scope.FnCancelPer = function() {
            angular.copy($scope.originalSelectedEmp, $scope.selectedMail);
            $scope.modeShowPer = true;
            $scope.modeEditPer = true;
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
        $scope.$on("add", function(event, data) {
            //alert("add");
            employeeService.getAll().then(function(res) {
                $scope.employeeList = res.data;


                for (var i = 0; i <= $scope.employeeList.length - 1; i++) {
                    if ($scope.employeeList[i].PersonalInfo) {
                        var teamIsNew = $scope.positions.indexOf($scope.employeeList[i].PersonalInfo.Position) == -1;
                        if (teamIsNew) {
                            $scope.positions.push($scope.employeeList[i].PersonalInfo.Position);
                        }
                    }

                }

                $scope.selected = $scope.positions[0];
                // $scope.selectedMail = $scope.employeeList[0];
                $scope.selectedEmp = data;

            }, function(err) {
                console.log(err);
            });

        });



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
            var newEmp = {
                "PersonalInfo": {},
                "FamilyInfo": [],
                "EducationInfo": [],
                "WorkExperienceInfo": [],
                "LanguageInfo": [],
                "SpecialInfo": {},
                "OtherInfo": {}
            };
            $mdDialog.show({
                controller: 'ComposeDialogController',
                controllerAs: 'vm',
                locals: {
                    selectedEmpCopy: newEmp,
                    mode: 'C'
                },
                templateUrl: 'app/main/apps/employee/dialogs/compose/compose-dialog.html',
                parent: angular.element($document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
        }

        $scope.editDialog = function(ev) {

                $mdDialog.show({
                    controller: 'ComposeDialogController',
                    controllerAs: 'vm',
                    locals: {
                        selectedEmpCopy: $scope.selectedEmpCopy,
                        mode: 'U'
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
                    selectedMail: $scope.selectedEmp
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
                controller: 'DeleteDialogEmpController',
                controllerAs: 'vm',
                locals: {
                    selectedMail: undefined,
                    selectEmpForDel: $scope.selectEmpForDel
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
                    selectedEmp: $scope.originalSelectedEmp
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
                    selectedMail: $scope.selectedEmp
                },
                templateUrl: 'app/main/apps/employee/dialogs/compose/evaluationEmp.html',
                parent: angular.element($document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
        }
        ////////////  Increase ///////////////
        $scope.increaseDialog = function(ev) {
                $mdDialog.show({
                    controller: 'IncreaseDialogController',
                    controllerAs: 'vm',
                    locals: {
                        selectedMail: $scope.selectedMail
                    },
                    templateUrl: 'app/main/apps/employee/dialogs/compose/increaseEmp.html',
                    parent: angular.element($document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true
                });
            }
            ////////////  Deduction ///////////////
        $scope.deductionDialog = function(ev) {
            $mdDialog.show({
                controller: 'DeductionDialogController',
                controllerAs: 'vm',
                locals: {
                    selectedMail: $scope.selectedMail
                },
                templateUrl: 'app/main/apps/employee/dialogs/compose/deductionEmp.html',
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
