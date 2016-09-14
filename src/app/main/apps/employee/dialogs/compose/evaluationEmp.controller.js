(function() {
    'use strict';

    angular
        .module('app.employee')
        .controller('EvaluationDialogController', EvaluationDialogController);

    /** @ngInject */
    function EvaluationDialogController($mdDialog, selectedMail, $scope, employeeService) {


        //////////////////////////////////////////////////////custom///////////////////////////////


        $scope.closeDialog = function() {
            $mdDialog.hide();
        }

    } //end controler

})();
