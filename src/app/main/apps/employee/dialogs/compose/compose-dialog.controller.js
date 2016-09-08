(function() {
    'use strict';

    angular
        .module('app.employee')
        .controller('ComposeDialogController', ComposeDialogController);

    /** @ngInject */
    function ComposeDialogController($mdDialog, selectedMail, $scope) {
        $scope.newEmp = {
            "PersonalInfo": {
            },
            "FamilyInfo": [],
            "EducationInfo": [],
            "WorkExperienceInfo": [],
            "LanguageInfo": [],
            "SpecialInfo": [{

                "TypingSI": 'false',
                "ComputerSI": 'false',
                "DrivingSI": 'false'
                

            }],
            "OtherInfo": {}
        };

        console.log($scope.newEmp.SpecialInfo);
        $scope.done = function() {
            console.log($scope.newEmp);
        };
        $scope.sendForm = function() {
            console.log(JSON.stringify($scope.newEmp));
            $mdDialog.hide();
        };
        var vm = this;

        // Data
        vm.form = {
            from: 'johndoe@creapond.com'
        };

        vm.hiddenCC = true;
        vm.hiddenBCC = true;

        // If replying
        if (angular.isDefined(selectedMail)) {
            vm.form.to = selectedMail.from.email;
            vm.form.subject = 'RE: ' + selectedMail.subject;
            vm.form.message = '<blockquote>' + selectedMail.message + '</blockquote>';
        }

        // Methods
        // vm.closeDialog = closeDialog;
        // vm.addNewList = addNewList;


        //////////

        $scope.active = true;

        $scope.closeDialog = function() {
            $mdDialog.hide();
        }
        $scope.stepper = {
            step1: {},
            step2: {},
            step3: {}
        };

        $scope.basicForm = {};
        $scope.formWizard = {};
        $scope.sex = [{ "name": "Male" }, { "name": "Famale" }];
        $scope.eduLevelList = [{ 'level': 'Grade 1-3' },
            { 'level': 'Grade 4-6' },
            { 'level': 'High 1-3' },
            { 'level': 'Senior High 4-6' }
        ];
        $scope.majorList = [{ 'major': 'General' },
            { 'major': 'Art Math' },
            { 'major': 'Science Math' },
            { 'major': 'Computer Science' }
        ];
        $scope.LangList = [{ 'lang': 'English' },
            { 'lang': 'Japanese' },
            { 'lang': 'Chinese' },
            { 'lang': 'German' }
        ];
        $scope.typeLang = ['Good', 'Fair', 'Poor'];
        $scope.typeLiving = ['With Parent', 'Own Home', 'Hired House', 'Hostel'];
        $scope.typeMilitary = ['Exempted', 'Served', 'Not Yet'];
        $scope.typeMarital = ['Single', 'Married', 'Widowed', 'Separated'];
        $scope.typeSpecial = ['true', 'false'];

        // Methods


        $scope.family = {
            "FirstNameFI": "",
            "LastnameFI": "",
            "AgeFI": "",
            "SexFI": "Male",
            "OccupationFI": "",
            "WorkPlaceFI": "",
            "RelatedFI": "",
            "TelFI": ""
        };
        $scope.education = {
            "EducationLevelEI": "",
            "InstitutionEI": "",
            "MajorEI": "",
            "DateFromEI": "",
            "DateToEI": ""
        };
        $scope.workExp = {
            "CompanyWI": "",
            "DateFromWI": "",
            "DateToWI": "",
            "PositionWI": "",
            "SalaryWI": "",
            "ReasonWI": "",
            "JobDescWI": ""
        };
        $scope.language = {
            "LanguageTypeLI": "",
            "SpeakingLI": "",
            "WritingLI": "",
            "ReadingLI": ""
        };
        $scope.special = {
            "TypingSI": ""
                // "TypingTHSI": 4,
                // "TypingENSI": 5,
                // "ComputerSI": true,
                // "ComputerDescSI": "sample string 7",
                // "DrivingSI": true,
                // "DrivingNoSI": "sample string 9",
                // "OfficeMachineSI": "sample string 10",
                // "HobbiceSI": "sample string 11",
                // "SportSI": "sample string 12",
                // "KnowledgeSI": "sample string 13",
                // "OtherSI": "sample string 14",
        }
        $scope.pushnong = function() {
            $scope.newEmp.SpecialInfo.push($scope.special);
            console.log($scope.special);
        }

        $scope.addNewFam = function() {
            $scope.newEmp.FamilyInfo.push($scope.family);

            $scope.family = {
                "FirstNameFI": "",
                "LastnameFI": "",
                "AgeFI": "",
                "SexFI": "",
                "OccupationFI": "",
                "WorkPlaceFI": "",
                "RelatedFI": "",
                "TelFI": ""
            }

        };
        $scope.removeItem = function(index) {
            $scope.newEmp.FamilyInfo.splice(index, 1);
        }
        $scope.addListEdu = function() {
            $scope.newEmp.EducationInfo.push($scope.education);
            $scope.education = {
                "EducationLevelEI": "",
                "InstitutionEI": "",
                "MajorEI": "",
                "DateFromEI": "",
                "DateToEI": ""
            };
        };
        $scope.removeItemEdu = function(index) {
            $scope.newEmp.EducationInfo.splice(index, 1);
        }
        $scope.addListWork = function() {
            $scope.newEmp.WorkExperienceInfo.push($scope.workExp);
            $scope.workExp = {
                "CompanyWI": "",
                "DateFromWI": "",
                "DateToWI": "",
                "PositionWI": "",
                "SalaryWI": "",
                "ReasonWI": "",
                "JobDescWI": ""
            };
        };
        $scope.removeItemWork = function(index) {
            $scope.newEmp.WorkExperienceInfo.splice(index, 1);
        }

        $scope.addListLang = function() {
            $scope.newEmp.LanguageInfo.push($scope.language);
            $scope.language = {
                "LanguageTypeLI": "",
                "SpeakingLI": "",
                "WritingLI": "",
                "ReadingLI": ""
            };
        };

        $scope.removeItemLang = function(index) {
            $scope.newEmp.LanguageInfo.splice(index, 1);
        }

        // $scope.checkedTypeSpec = function() {
        //         if ($scope.typeSpecial == 'Yes') {
        //             $scope.SpecialInfo.TypingSI = true;
        //             console.log($scope.newEmp.SpecialInfo.TypingSI);
        //         } else {
        //             $scope.SpecialInfo.TypingSI = false;
        //             console.log($scope.newEmp.SpecialInfo.TypingSI);
        //         }

        //     }
        // $scope.submitStepper = function(ev) {
        //     // You can do an API call here to send the form to your server

        //     // Show the sent data.. you can delete this safely.
        //     $mdDialog.show({
        //         controller: function($scope, $mdDialog, formWizardData) {
        //             $scope.formWizardData = formWizardData;
        //             $scope.closeDialog = function() {
        //                 $mdDialog.hide();
        //             }
        //         },
        //         template: '<md-dialog>' +
        //             '  <md-dialog-content><h1>You have sent the form with the following data</h1><div><pre>{{formWizardData | json}}</pre></div></md-dialog-content>' +
        //             '  <md-dialog-actions>' +
        //             '    <md-button ng-click="closeDialog()" class="md-primary">' +
        //             '      Close' +
        //             '    </md-button>' +
        //             '  </md-dialog-actions>' +
        //             '</md-dialog>',
        //         parent: angular.element('body'),
        //         targetEvent: ev,
        //         locals: {
        //             formWizardData: $scope.stepper
        //         },
        //         clickOutsideToClose: true
        //     });

        //     // Reset the form model
        //     $scope.stepper = {
        //         step1: {},
        //         step2: {},
        //         step3: {}
        //     };
        // }

        /**
         * Send form
         */
        // $scope.sendForm = function(ev) {
        //     // You can do an API call here to send the form to your server

        //     // Show the sent data.. you can delete this safely.
        //     $mdDialog.show({
        //         controller: function($scope, $mdDialog, formWizardData) {
        //             $scope.formWizardData = formWizardData;
        //             $scope.closeDialog = function() {
        //                 $mdDialog.hide();
        //             }
        //         },
        //         template: '<md-dialog>' +
        //             '  <md-dialog-content><h1>You have sent the form with the following data</h1><div><pre>{{formWizardData | json}}</pre></div></md-dialog-content>' +
        //             '  <md-dialog-actions>' +
        //             '    <md-button ng-click="closeDialog()" class="md-primary">' +
        //             '      Close' +
        //             '    </md-button>' +
        //             '  </md-dialog-actions>' +
        //             '</md-dialog>',
        //         parent: angular.element('body'),
        //         targetEvent: ev,
        //         locals: {
        //             formWizardData: $scope.formWizard
        //         },
        //         clickOutsideToClose: true
        //     });

        //     // Clear the form data
        //     $scope.formWizard = {};
        // }
    }


})();
