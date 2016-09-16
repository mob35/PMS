(function() {
    'use strict';

    angular
        .module('app.employee')
        .controller('DeleteDialogEmpController', DeleteDialogEmpController);

    /** @ngInject */
    function DeleteDialogEmpController($mdDialog, selectedMail, selectEmpForDel, $scope, employeeService) {
        $scope.newEmp = selectedMail;
        // $scope.employeeList = res.data;
        console.log($scope.employeeList);
        var vm = this;

        $scope.deleteEmp = function() {
            // alert("deleteEmp");
            // console.log('length:' + selectEmpForDel._id);
            employeeService.deleteEmpData(selectEmpForDel).then(function(res) {
                // for (var i = 0; i < $scope.newEmp.length; i++) {
                //     if (selectEmpForDel._id == $scope.newEmp._id) {
                //         $scope.newEmp.splice(i, 1);
                //         break;
                //     }
                // }
                // selectedMail.PersonalInfo.FirstNameEN = '';
                $scope.closeDialog();
                console.log('success');
            }, function(err) {
                console.log(err);
            });

        }
        $scope.closeDialog = function() {
            //alert("closeDialog");
            $mdDialog.hide();
       

        }


        
    }

})();
