(function() {
    'use strict';

    angular
        .module('app.employee')
        .controller('RegardDialogController', RegardDialogController);

    /** @ngInject */
    function RegardDialogController($mdDialog, selectedEmp, $scope, benefitsMasterService,employeeService) {

        //mock employee
        $scope.selectedEmp = {
            "EmpID": "1",
            "PersonalInfo": {
                "EmpID": "1",
                "FirstNameTH": "sample string 2",
                "LastNameTH": "sample string 3",
                "FirstNameEN": "sample string 4",
                "LastNameEN": "sample string 5",
                "Position": "sample string 6",
                "Salary": 7,
                "StartDate": "09/12/2016",
                "PresentAddress": "sample string 8",
                "Moo": 9,
                "District": "sample string 10",
                "Amphur": "sample string 11",
                "Province": "sample string 12",
                "Postcode": "sample string 13",
                "Tel": "sample string 14",
                "Moblie": "sample string 15",
                "Email": "sample string 16",
                "Living": "sample string 17",
                "Birthdate": "2016-07-26T18:53:36.003",
                "Age": 18,
                "Race": "sample string 19",
                "Nationality": "sample string 20",
                "Religion": "sample string 21",
                "IDCard": "sample string 22",
                "IDCardExp": "2016-07-26T18:53:36.003",
                "Height": 23,
                "Weight": 24,
                "Military": "sample string 25",
                "Marital": "sample string 26",
                "Sex": "sample string 27",
                "Img": "sample string 28",
                "UnderlyingDisease": "sample string 29",
                "Account": null,
                "ObjectState": 0,
                "Created": "2016-07-26T18:53:36.003",
                "CreatedBy": "sample string 28",
                "Updated": "2016-07-26T18:53:36.003",
                "UpdatedBy": "sample string 29"
            },
            "BenefitsInfo": [],
            "IncreaseInfo": [],
            "DeductionInfo": [],
            "SilpInfo": [],
            "ObjectState": 0,
            "Created": "2016-09-06T16:49:39.14",
            "CreatedBy": "sample string 2",
            "Updated": "2016-07-26T18:53:36.01",
            "UpdatedBy": "sample string 3"
        };

        $scope.newBnf = {
            "NameBN": "",
            "DetailBN": "sample string 4",
        };
        //////////////////////////////////////////////////////////call service method////////////////////////////////////////////////

        benefitsMasterService.getAll().then(function(res) {
            $scope.benefitsList = res.data;
        }, function(err) {
            console.log(err);
        });


        $scope.addBenefitsList = function() {
            var teamIsNew = $scope.selectedEmp.BenefitsInfo.indexOf($scope.newBnf) == -1;
            if (teamIsNew) {
                $scope.selectedEmp.BenefitsInfo.push($scope.newBnf);
                $scope.newBnf = {
                    "BnID": "",
                    "NameBN": "",
                    "DetailBN": "",
                };
            }
        }

        $scope.saveRegardEmployee = function() {
            employeeService.putRegradEmp($scope.selectedEmp).then(function(res) {
                console.log('sucess');
            }, function(err) {
                console.log(err);
            });
        }

        $scope.deleteBnf = function(bnfID) {
            for (var i = 0; i < $scope.selectedEmp.BenefitsInfo.length; i++) {
                if ($scope.selectedEmp.BenefitsInfo[i].BnID === bnfID) {
                    $scope.selectedEmp.BenefitsInfo.splice(i, 1);
                    break;
                }
            }

        }

        $scope.closeDialog = function() {
            $mdDialog.hide();
        }

    }

})();
