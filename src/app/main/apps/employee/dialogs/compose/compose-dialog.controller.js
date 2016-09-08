(function() {
    'use strict';

    angular
        .module('app.employee')
        .controller('ComposeDialogController', ComposeDialogController);

    /** @ngInject */
    function ComposeDialogController($mdDialog, selectedMail, $scope) {
        $scope.newEmp = {
            "EmpID": "1",
            "PersonalInfo": {
                "EmpID": "1",
                "FirstNameTH": "",
                "LastNameTH": "",
                "FirstNameEN": "",
                "LastNameEN": "",
                "Position": "",
                "Salary": "",
                "PresentAddress": "",
                "Moo": "",
                "District": "",
                "Amphur": "",
                "Province": "",
                "Postcode": "",
                "Tel": "",
                "Moblie": "",
                "Email": "",
                "Living": "",
                "Birthdate": "",
                "Age": "",
                "Race": "",
                "Nationality": "",
                "Religion": "",
                "IDCard": "",
                "IDCardExp": "",
                "Height": "",
                "Weight": "",
                "Military": "",
                "Marital": "",
                "Sex": "Male",
                "Img": "",
                "UnderlyingDisease": "",
                "Account": "",
                "ObjectState": "",
                "Created": "",
                "CreatedBy": "",
                "Updated": "",
                "UpdatedBy": ""
            },
            "FamilyInfo": [],
            "EducationInfo": [],
            "WorkExperienceInfo": [],
            "LanguageInfo": [],
            "SpecialInfo": [{
                "SpeID": 1,
                "EmpID": "1",
                "TypingSI": 'true',
                "TypingTHSI": 4,
                "TypingENSI": 5,
                "ComputerSI": true,
                "ComputerDescSI": "sample string 7",
                "DrivingSI": true,
                "DrivingNoSI": "sample string 9",
                "OfficeMachineSI": "sample string 10",
                "HobbiceSI": "sample string 11",
                "SportSI": "sample string 12",
                "KnowledgeSI": "sample string 13",
                "OtherSI": "sample string 14",
                "ObjectState": 0,
                "Created": "2016-07-26T19:15:28.8719377+07:00",
                "CreatedBy": "sample string 15",
                "Updated": "2016-07-26T19:15:28.8719377+07:00",
                "UpdatedBy": "sample string 16"
            }],
            "OtherInfo": {
                "EmpID": "1",
                "WorkCountryOI": true,
                "WorkCountryDescOI": "sample string 3",
                "FirtNameOI": "sample string 4",
                "LastNameOI": "sample string 5",
                "RelatedOI": "sample string 6",
                "AddressOI": "sample string 7",
                "TelOI": "sample string 8",
                "SourceInfoOI": "sample string 9",
                "ContagiousFlagOI": true,
                "ContagiousDescOI": "sample string 11",
                "FirtNameWorkRelativeOI": "sample string 12",
                "LastNameWorkRelativeOI": "sample string 13",
                "IntroduceYoureSelfOI": "sample string 14",
                "ObjectState": 0,
                "Created": "2016-07-26T18:53:36.01",
                "CreatedBy": "sample string 15",
                "Updated": "2016-07-26T18:53:36.01",
                "UpdatedBy": "sample string 16"
            },
            "RegardInfo": {
                "EmpID": "1",
                "PositionRI": "sample string 2",
                "SalaryRI": 3,
                "StartDateRI": "2016-07-26T18:53:36.01",
                "ObjectState": 0,
                "Created": "2016-07-26T18:53:36.01",
                "CreatedBy": "sample string 4",
                "Updated": "2016-07-26T18:53:36.01",
                "UpdatedBy": "sample string 5"
            },
            "BenefitsInfo": [{
                "BnID": 1,
                "EmpID": "1",
                "NameBN": "sample string 3",
                "DetailBN": "sample string 4",
                "ObjectState": 0,
                "Created": "2016-07-26T18:53:36.01",
                "CreatedBy": "sample string 5",
                "Updated": "2016-07-26T18:53:36.01",
                "UpdatedBy": "sample string 6"
            }, {
                "BnID": 2,
                "EmpID": "1",
                "NameBN": "sample string 3",
                "DetailBN": "sample string 4",
                "ObjectState": 0,
                "Created": "2016-07-26T18:53:36.01",
                "CreatedBy": "sample string 5",
                "Updated": "2016-07-26T18:53:36.01",
                "UpdatedBy": "sample string 6"
            }],
            "CertificateInfo": {
                "EmpID": "1",
                "DateRecordCI": "2016-07-26T19:15:28.873",
                "FirstNameCI": "sample string 2",
                "LastNameCI": "sample string 3",
                "PositionCI": "sample string 4",
                "DateStartCI": "2016-07-26T19:15:28.873",
                "SalaryCI": 5,
                "DatePrintCI": "2016-07-26T19:15:28.873",
                "BossSign": "sample string 6",
                "ObjectState": 0,
                "Created": "2016-07-26T19:15:28.873",
                "CreatedBy": "sample string 7",
                "Updated": "2016-07-26T19:15:28.873",
                "UpdatedBy": "sample string 8"
            },
            "EvaluationInfo": {
                "EmpID": "1",
                "DateConfirmedEV": "2016-07-26T19:35:02.69",
                "JobLearningEV": 6,
                "JobKnowledge_SkillEV": 7,
                "AdaptationEV": 8,
                "RulesRespectEV": 9,
                "CommunicationEV": 10,
                "AttitudeEV": 11,
                "Planning_FollowingEV": 12,
                "Decision_SolvingEV": 13,
                "ResponsibilityEV": 14,
                "CooperationEV": 15,
                "SumP5EV": 16,
                "SumP4EV": 17,
                "SumP3EV": 18,
                "SumP2EV": 19,
                "SumP1EV": 20,
                "TotalScoreEV": 21,
                "PercentEV": 22,
                "OtherEV": "sample string 23",
                "EvaluationTypeEV": "sample string 24",
                "ObjectState": 0,
                "Created": "2016-07-26T19:35:02.69",
                "CreatedBy": "sample string 25",
                "Updated": "2016-07-26T19:35:02.69",
                "UpdatedBy": "sample string 26"
            },
            "IncreaseInfo": [],
            "DeductionInfo": [],
            "SilpInfo": [],
            "ObjectState": 0,
            "Created": "2016-09-06T16:49:39.14",
            "CreatedBy": "sample string 2",
            "Updated": "2016-07-26T18:53:36.01",
            "UpdatedBy": "sample string 3"
        };

        console.log($scope.newEmp.SpecialInfo);
        $scope.done = function () {
            console.log($scope.newEmp);
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
