(function() {
    'use strict';

    angular
        .module('app.employee')
        .controller('EvaluationDialogController', EvaluationDialogController);

    /** @ngInject */
    function EvaluationDialogController($mdDialog, selectedMail, $scope, employeeService) {
        $scope.newEmp = selectedMail;
        console.log(selectedMail);
        // console.log($scope.newEmp.SpecialInfo);
        $scope.done = function() {
            employeeService.putEmpData($scope.newEmp).then(function(res) {
                    $scope.closeDialog();
                }, function(err) {
                    console.log(err);
                });
            
            console.log((JSON.stringify($scope.newEmp)));
        };

        //     $scope.newEmp = {

        //         "EvaluationInfo": {
        //             "EmpID": "sample string 1",
        //             "DateConfirmedEV": "2016-09-07T16:14:25.6154237+07:00",
        //             "JobLearningEV": 2,
        //             "JobKnowledge_SkillEV": 3,
        //             "AdaptationEV": 4,
        //             "RulesRespectEV": 5,
        //             "CommunicationEV": 6,
        //             "AttitudeEV": 7,
        //             "Planning_FollowingEV": 8,
        //             "Decision_SolvingEV": 9,
        //             "ResponsibilityEV": 10,
        //             "CooperationEV": 11,
        //             "SumP5EV": 12,
        //             "SumP4EV": 13,
        //             "SumP3EV": 14,
        //             "SumP2EV": 15,
        //             "SumP1EV": 16,
        //             "TotalScoreEV": 17,
        //             "PercentEV": 18,
        //             "OtherEV": "sample string 19",
        //             "EvaluationTypeEV": "sample string 20",

        //         },

        // };


        //////////////////////////////////////////////////////custom///////////////////////////////

        // $scope.issueList = [];


        $scope.closeDialog = function() {
            $mdDialog.hide();
        }

    } //end controler

})();
