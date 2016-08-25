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
        $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
            'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
            'WY').split(' ').map(function(state) {
            return { abbrev: state };
        });

        // Methods
        $scope.family = [];
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

        $scope.submitStepper=function(ev) {
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
