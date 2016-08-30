(function() {
    'use strict';

    angular
        .module('app.employee')
        .controller('ComposeDialogController', ComposeDialogController);

    /** @ngInject */
    function ComposeDialogController($mdDialog, selectedMail, $scope) {
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
        // Methods
        $scope.family = [];
        $scope.education = [];
        $scope.work = [];
        $scope.language = [];

        // vm.family = [];
        // vm.sendForm = sendForm;
        // vm.submitStepper = submitStepper;

        //////////

        /**
         * Submit stepper form
         *
         * @param ev
         */
        $scope.addNewList = function() {
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


        $scope.removeItem = function(index) {
            $scope.family.splice(index, 1);
        }

        $scope.addListEdu = function() {
            $scope.education.push({
                'eduLevel': $scope.education.eduLevel,
                'institution': $scope.education.institution,
                'major': $scope.education.major,
                'dateFrom': $scope.education.dateFrom,
                'dateTo': $scope.education.dateTo
            });
            $scope.education.eduLevel = '';
            $scope.education.institution = '';
            $scope.education.major = '';
            $scope.education.dateFrom = '';
            $scope.education.dateTo = '';
        }
        $scope.removeItemEdu = function(index) {
            $scope.education.splice(index, 1);
        }

        $scope.addListWork = function() {
            $scope.work.push({
                'companyName': $scope.work.companyName,
                'dateFrom': $scope.work.dateFrom,
                'dateTo': $scope.work.dateTo,
                'position': $scope.work.position,
                'salary': $scope.work.salary,
                'reasons': $scope.work.reasons,
                'jobDesc': $scope.work.jobDesc

            });
            $scope.work.companyName = '';
            $scope.work.dateFrom = '';
            $scope.work.dateTo = '';
            $scope.work.position = '';
            $scope.work.salary = '';
            $scope.work.reasons = '';
            $scope.work.jobDesc = '';
        }
        $scope.removeItemWork = function(index) {
            $scope.work.splice(index, 1);
        }

        $scope.addListLang = function() {
            $scope.language.push({
                'langType': $scope.language.langType,
                'speaking': $scope.language.speaking,
                'writing': $scope.language.writing,
                'reading': $scope.language.reading

            });
            $scope.language.langType = '';
            $scope.language.speaking = '';
            $scope.language.writing = '';
            $scope.language.reading = '';
        }
   
        $scope.removeItemLang = function(index) {
            $scope.language.splice(index, 1);
        }


        // function addNewList() {
        //     vm.family.push({
        //         'nameFm': vm.family.nameFm,
        //         'LastNameFm': vm.family.LastNameFm,
        //         'age': vm.family.age,
        //         'related': vm.family.related,
        //         'Occupation': vm.family.Occupation,
        //         'tel': vm.family.tel
        //     });
        //     vm.family.nameFm = '';
        //     vm.family.LastNameFm = '';
        //     vm.family.age = '';
        //     vm.family.related = '';
        //     vm.family.Occupation = '';
        //     vm.family.tel = '';
        // }

        $scope.submitStepper = function(ev) {
            // You can do an API call here to send the form to your server

            // Show the sent data.. you can delete this safely.
            $mdDialog.show({
                controller: function($scope, $mdDialog, formWizardData) {
                    $scope.formWizardData = formWizardData;
                    $scope.closeDialog = function() {
                        $mdDialog.hide();
                    }
                },
                template: '<md-dialog>' +
                    '  <md-dialog-content><h1>You have sent the form with the following data</h1><div><pre>{{formWizardData | json}}</pre></div></md-dialog-content>' +
                    '  <md-dialog-actions>' +
                    '    <md-button ng-click="closeDialog()" class="md-primary">' +
                    '      Close' +
                    '    </md-button>' +
                    '  </md-dialog-actions>' +
                    '</md-dialog>',
                parent: angular.element('body'),
                targetEvent: ev,
                locals: {
                    formWizardData: $scope.stepper
                },
                clickOutsideToClose: true
            });

            // Reset the form model
            $scope.stepper = {
                step1: {},
                step2: {},
                step3: {}
            };
        }

        /**
         * Send form
         */
        $scope.sendForm = function(ev) {
            // You can do an API call here to send the form to your server

            // Show the sent data.. you can delete this safely.
            $mdDialog.show({
                controller: function($scope, $mdDialog, formWizardData) {
                    $scope.formWizardData = formWizardData;
                    $scope.closeDialog = function() {
                        $mdDialog.hide();
                    }
                },
                template: '<md-dialog>' +
                    '  <md-dialog-content><h1>You have sent the form with the following data</h1><div><pre>{{formWizardData | json}}</pre></div></md-dialog-content>' +
                    '  <md-dialog-actions>' +
                    '    <md-button ng-click="closeDialog()" class="md-primary">' +
                    '      Close' +
                    '    </md-button>' +
                    '  </md-dialog-actions>' +
                    '</md-dialog>',
                parent: angular.element('body'),
                targetEvent: ev,
                locals: {
                    formWizardData: $scope.formWizard
                },
                clickOutsideToClose: true
            });

            // Clear the form data
            $scope.formWizard = {};
        }
    }


})();
