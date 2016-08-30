(function() {
    'use strict';

    angular
        .module('app.employee')
        .controller('EvaluationDialogController', EvaluationDialogController);

    /** @ngInject */
    function EvaluationDialogController($mdDialog, selectedMail, $scope) {
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
        vm.closeDialog = closeDialog;


        //////////

        function closeDialog() {
            $mdDialog.hide();
        }
        vm.stepper = {
            step1: {},
            step2: {},
            step3: {}
        };

        vm.basicForm = {};
        vm.formWizard = {};
        vm.sex = [{ "name": "Male" }, { "name": "Famale" }];
        vm.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
            'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
            'WY').split(' ').map(function(state) {
            return { abbrev: state };
        });

        

        // Methods
        // $scope.family = [];
        vm.family = [];
        vm.sendForm = sendForm;
        vm.submitStepper = submitStepper;

        //////////

        /**
         * Submit stepper form
         *
         * @param ev
         */

        $scope.showIssueInformation = function(){
            
        }

        function submitStepper(ev) {
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
                    formWizardData: vm.stepper
                },
                clickOutsideToClose: true
            });

            // Reset the form model
            vm.stepper = {
                step1: {},
                step2: {},
                step3: {}
            };
        }

        /**
         * Send form
         */
        function sendForm(ev) {
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
                    formWizardData: vm.formWizard
                },
                clickOutsideToClose: true
            });

            // Clear the form data
            vm.formWizard = {};
        }

        //////////////////////////////////////////////////////custom///////////////////////////////

        $scope.issueList = [{
                "issueName": "Job Learning",
                "checked5": "true",
                "checked4": "",
                "checked3": "",
                "checked2": "",
                "checked1": ""
            }, {
                "issueName": "Job Knowledge & Skill",
                "checked5": "",
                "checked4": "true",
                "checked3": "",
                "checked2": "",
                "checked1": ""
            }, {
                "issueName": "Adaptation",
                "checked5": "",
                "checked4": "",
                "checked3": "true",
                "checked2": "",
                "checked1": ""
            }, {
                "issueName": "Rules Respect",
                "checked5": "",
                "checked4": "",
                "checked3": "",
                "checked2": "true",
                "checked1": ""
            }, {
                "issueName": "Communication",
                "checked5": "",
                "checked4": "",
                "checked3": "",
                "checked2": "",
                "checked1": "true"
            }, {
                "issueName": "Attitude",
                "checked5": "true",
                "checked4": "",
                "checked3": "",
                "checked2": "",
                "checked1": ""
            }, {
                "issueName": "Planning and Following up on work",
                "checked5": "",
                "checked4": "",
                "checked3": "true",
                "checked2": "",
                "checked1": ""
            }, {
                "issueName": "Decision Makong / Problem Solving",
                "checked5": "true",
                "checked4": "",
                "checked3": "",
                "checked2": "",
                "checked1": ""
            }, {
                "issueName": "Responsibility",
                "checked5": "",
                "checked4": "",
                "checked3": "",
                "checked2": "true",
                "checked1": ""
            }, {
                "issueName": "Co-operation with Colleagues",
                "checked5": "true",
                "checked4": "",
                "checked3": "",
                "checked2": "",
                "checked1": ""
            }, {
                "issueName": "Scores",
                "checked5": "true",
                "checked4": "",
                "checked3": "",
                "checked2": "",
                "checked1": ""
            }];


    }//end controler

})();













