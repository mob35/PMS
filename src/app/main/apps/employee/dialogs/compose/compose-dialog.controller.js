(function() {
    'use strict';

    angular
        .module('app.employee')
        .controller('ComposeDialogController', ComposeDialogController);

    /** @ngInject */
    function ComposeDialogController($mdDialog, mode, $rootScope, $scope, employeeService, selectedEmpCopy) {
        $scope.newEmp = selectedEmpCopy;


        // console.log($scope.newEmp.SpecialInfo);
        $scope.done = function() {
            console.log($scope.newEmp);
            console.log($scope.newEmp.SpecialInfo);
            console.log(JSON.stringify($scope.newEmp));

        };
        $scope.sendForm = function() {
            console.log(mode);
            console.log($scope.newEmp);
            console.log(JSON.stringify($scope.newEmp));
            if (mode == 'C') {
                employeeService.postEmp($scope.newEmp).then(function(res) {
                    console.log("==============================================================");
                    console.log(res);
                    $scope.closeDialog();
                }, function(err) {
                    console.log(err);
                });
            } else {
                console.log(JSON.stringify(selectedEmpCopy));
                employeeService.putEmpData($scope.newEmp).then(function(res) {
                    $scope.closeDialog();
                }, function(err) {
                    console.log(err);
                });
            }
            $mdDialog.hide();
        };
        var vm = this;

        // Data
        vm.form = {
            from: 'johndoe@creapond.com'
        };

        vm.hiddenCC = true;
        vm.hiddenBCC = true;


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
            "_id": $scope.newEmp._id,
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
            "_id": $scope.newEmp._id,
            "EducationLevelEI": "",
            "InstitutionEI": "",
            "MajorEI": "",
            "DateFromEI": "",
            "DateToEI": ""
        };
        $scope.workExp = {
            "_id": $scope.newEmp._id,
            "CompanyWI": "",
            "DateFromWI": "",
            "DateToWI": "",
            "PositionWI": "",
            "SalaryWI": "",
            "ReasonWI": "",
            "JobDescWI": ""
        };
        $scope.language = {
            "_id": $scope.newEmp._id,
            "LanguageTypeLI": "",
            "SpeakingLI": "",
            "WritingLI": "",
            "ReadingLI": ""
        };
        // $scope.special = {
        //     "_id": $scope.newEmp._id,
        //     "TypingSI": true,
        //     "TypingTHSI": 0,
        //     "TypingENSI": 0,
        //     "ComputerSI": true,
        //     "ComputerDescSI": "",
        //     "DrivingSI": true,
        //     "DrivingNoSI": "",
        //     "OfficeMachineSI": "",
        //     "HobbiceSI": "",
        //     "SportSI": "",
        //     "KnowledgeSI": "",
        //     "OtherSI": "",
        // };
        // $scope.addspecial = function() {
        //     $scope.newEmp.SpecialInfo.push($scope.special);
        //     $scope.special = {
        //         "TypingSI": true,
        //         "TypingTHSI": 0,
        //         "TypingENSI": 0,
        //         "ComputerSI": true,
        //         "ComputerDescSI": "",
        //         "DrivingSI": true,
        //         "DrivingNoSI": "",
        //         "OfficeMachineSI": "",
        //         "HobbiceSI": "",
        //         "SportSI": "",
        //         "KnowledgeSI": "",
        //         "OtherSI": ""
        //     };

        //     console.log($scope.special);
        // }

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
    }


})();
