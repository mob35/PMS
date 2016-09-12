(function() {
    'use strict';

    angular
        .module('app.employee')
        .controller('IncreaseDialogController', IncreaseDialogController);

    /** @ngInject */
    function IncreaseDialogController($mdDialog, $scope, selectedMail, employeeService) {

        $scope.selectedMail = {};
        angular.copy(selectedMail, $scope.selectedMail);
        $scope.newIncre = {};
        console.log($scope.selectedMail.IncreaseInfo);
        //////////////////////////////////////////////////////////call service method////////////////////////////////////////////////


        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        $scope.addIncreaseList = function() {}


        $scope.closeDialog = function() {
            $mdDialog.hide();
        }
    } //end controler

})();
