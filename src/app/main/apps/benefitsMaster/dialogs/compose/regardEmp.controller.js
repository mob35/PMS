(function ()
{
    'use strict';

    angular
        .module('app.employee')
        .controller('RegardDialogController', RegardDialogController);

    /** @ngInject */
    function RegardDialogController($mdDialog, selectedMail, $scope)
    {
        var vm = this;

        // Data
        vm.form = {
            from: 'johndoe@creapond.com'
        };

        vm.hiddenCC = true;
        vm.hiddenBCC = true;

        // If replying
        if ( angular.isDefined(selectedMail) )
        {
            vm.form.to = selectedMail.from.email;
            vm.form.subject = 'RE: ' + selectedMail.subject;
            vm.form.message = '<blockquote>' + selectedMail.message + '</blockquote>';
        }

        // Methods
        vm.closeDialog = closeDialog;
        vm.addNewList = addNewList;
        // $scope.addBenefitsList = addBenefitsList;


        //////////

        function closeDialog()
        {
            $mdDialog.hide();
        }
        vm.stepper = {
            step1: {},
            step2: {},
            step3: {}
        };

        $scope.basicForm = {};
        vm.formWizard = {};
        vm.sex = [{"name":"Male"},{"name":"Famale"}];
        vm.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
        'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
        'WY').split(' ').map(function (state)
        {
            return {abbrev: state};
        });

        // Methods
        // $scope.family = [];
        vm.family = [];
        $scope.benefits = [];
        vm.sendForm = sendForm;
        vm.submitStepper = submitStepper;
        $scope.benefitsList = [
        {
            "nameBn":"Bupa",
            "descBn":"Health insurance"
        },
        {
            "nameBn":"Krungsri PA Super Prompt",
            "descBn":"Accident insurance"
        }
        ];

        //////////

        /**
         * Submit stepper form
         *
         * @param ev
         */
       
        function addNewList() { 
            vm.family.push({ 'nameFm': vm.family.nameFm, 
                                 'LastNameFm' : vm.family.LastNameFm, 
                                 'age': vm.family.age, 
                                 'related': vm.family.related , 
                                 'Occupation': vm.family.Occupation , 
                                 'tel': vm.family.tel }); 
            vm.family.nameFm = ''; 
            vm.family.LastNameFm = ''; 
            vm.family.age =''; 
            vm.family.related =''; 
            vm.family.Occupation =''; 
            vm.family.tel =''; 
        }
        $scope.addBenefitsList = function(){
            for (var i = 0; i <= $scope.benefitsList.length; i++) {
                if($scope.benefitsList[i].nameBn == $scope.benefits.nameBn){
                    $scope.benefits.push({
                        'nameBn': $scope.benefits.nameBn,
                        'descBn': $scope.benefitsList[i].descBn
                });
                break;
                }
            }
        }
        function submitStepper(ev)
        {
            // You can do an API call here to send the form to your server

            // Show the sent data.. you can delete this safely.
            $mdDialog.show({
                controller         : function ($scope, $mdDialog, formWizardData)
                {
                    $scope.formWizardData = formWizardData;
                    $scope.closeDialog = function ()
                    {
                        $mdDialog.hide();
                    }
                },
                template           : '<md-dialog>' +
                '  <md-dialog-content><h1>You have sent the form with the following data</h1><div><pre>{{formWizardData | json}}</pre></div></md-dialog-content>' +
                '  <md-dialog-actions>' +
                '    <md-button ng-click="closeDialog()" class="md-primary">' +
                '      Close' +
                '    </md-button>' +
                '  </md-dialog-actions>' +
                '</md-dialog>',
                parent             : angular.element('body'),
                targetEvent        : ev,
                locals             : {
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
        function sendForm(ev)
        {
            // You can do an API call here to send the form to your server

            // Show the sent data.. you can delete this safely.
            $mdDialog.show({
                controller         : function ($scope, $mdDialog, formWizardData)
                {
                    $scope.formWizardData = formWizardData;
                    $scope.closeDialog = function ()
                    {
                        $mdDialog.hide();
                    }
                },
                template           : '<md-dialog>' +
                '  <md-dialog-content><h1>You have sent the form with the following data</h1><div><pre>{{formWizardData | json}}</pre></div></md-dialog-content>' +
                '  <md-dialog-actions>' +
                '    <md-button ng-click="closeDialog()" class="md-primary">' +
                '      Close' +
                '    </md-button>' +
                '  </md-dialog-actions>' +
                '</md-dialog>',
                parent             : angular.element('body'),
                targetEvent        : ev,
                locals             : {
                    formWizardData: vm.formWizard
                },
                clickOutsideToClose: true
            });

            // Clear the form data
            vm.formWizard = {};
        }
    }
  
})();