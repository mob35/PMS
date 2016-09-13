(function() {
    'use strict';

    angular
        .module('app.employee')
        .controller('CertificateDialogController', CertificateDialogController);

    /** @ngInject */
    function CertificateDialogController($mdDialog, selectedMail, $scope, employeeService) {
        $scope.newEmp = selectedMail;

        console.log($scope.newEmp.SpecialInfo);
        $scope.done = function() {
        console.log($scope.newEmp);
        };
        $scope.sendForm = function() {
            console.log(mode);
            console.log(JSON.stringify($scope.newEmp));
            if (mode == 'C') {
                employeeService.postEmp($scope.newEmp).then(function(res) {
                    $scope.closeDialog();
                }, function(err) {
                    console.log(err);
                });

            } else {
                employeeService.putEmpData($scope.newEmp).then(function(res) {
                    $scope.closeDialog();
                }, function(err) {
                    console.log(err);
                });
            }
            $mdDialog.hide();
        };
        var vm = this;
        console.log(selectedMail);
        // Data
        // $scope.form = {
        //     from: 'johndoe@creapond.com'
        // };

        // vm.hiddenCC = true;
        // vm.hiddenBCC = true;

        // If replying
        // if (angular.isDefined(selectedMail)) {
        //     vm.form.to = selectedMail.from.email;
        //     vm.form.subject = 'RE: ' + selectedMail.subject;
        //     vm.form.message = '<blockquote>' + selectedMail.message + '</blockquote>';
        // }

        // Methods
        $scope.closeDialog = closeDialog;
        vm.addNewList = addNewList;


        //////////

        function closeDialog() {
            $mdDialog.hide();
        };

        // Methods
        // $scope.family = [];
        $scope.family = [];     
       
        
        $scope.employee = {

            "CertificateInfo": {
                "DateRecordCI": new Date,
                "FirstNameCI": "อนัญญา",
                "LastNameCI": "ทองไทย",
                "PositionCI": "Develop",
                "DateStartCI": new Date("2015-09-01"),
                "SalaryCI": 5,
                "DatePrintCI": new Date,
                "BossSign": "ลายเซ็น"

            },


        };

        // $scope.composeDialog = function(ev) {
        //         var newEmp = {
        //             "PersonalInfo": {},
        //             "FamilyInfo": [],
        //             "EducationInfo": [],
        //             "WorkExperienceInfo": [],
        //             "LanguageInfo": [],
        //             "SpecialInfo": [{

        //                 "TypingSI": 'false',
        //                 "ComputerSI": 'false',
        //                 "DrivingSI": 'false'


        //             }],
        //             "OtherInfo": {}
        //         };
        //         $mdDialog.show({
        //             controller: 'CertificateDialogController',
        //             controllerAs: 'vm',
        //             locals: {
        //                 selectedMail: newEmp,
        //                 mode:'C'
        //             },
        //             templateUrl: 'app/main/apps/employee/dialogs/compose/certificate.html',
        //             parent: angular.element($document.body),
        //             targetEvent: ev,
        //             clickOutsideToClose: true
        //         });
        //     }

            $scope.cerDialog = function(ev) {
                
                $mdDialog.show({
                    controller: 'CertificateDialogController',
                    controllerAs: 'vm',
                    locals: {
                        selectedMail: $scope.selectedEmp,
                        mode:'U'
                    },
                    templateUrl: 'app/main/apps/employee/dialogs/compose/certificate.html',
                    parent: angular.element($document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true
                });
            }




        //////////

        /**
         * Submit stepper form
         *
         * @param ev
         */

        function addNewList() {
            $scope.family.push({
                'nameFm': $scope.family.nameFm,
                'LastNameFm': $scope.family.LastNameFm,
                'age': $scope.family.age,
                'related': $scope.family.related,
                'Occupation': $scope.family.Occupation,
                'tel': $scope.family.tel
            });
            $scope.family.nameFm = '';
            $scope.family.LastNameFm = '';
            $scope.family.age = '';
            $scope.family.related = '';
            $scope.family.Occupation = '';
            $scope.family.tel = '';
        }

        

        
    }

})();
