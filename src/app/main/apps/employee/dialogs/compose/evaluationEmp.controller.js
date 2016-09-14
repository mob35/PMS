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
        $scope.calSum = function() {
            $scope.sumFive = 0;
            $scope.sumFour = 0;
            $scope.sumthree = 0;
            $scope.sumTwo = 0;
            $scope.sumOne = 0;
            // JobLearningEV
            if ($scope.newEmp.EvaluationInfo.JobLearningEV == 5) {
                $scope.sumFive = $scope.sumFive + 1;
            } else if ($scope.newEmp.EvaluationInfo.JobLearningEV == 4) {
                $scope.sumFour = $scope.sumFour + 1;
            } else if ($scope.newEmp.EvaluationInfo.JobLearningEV == 3) {
                $scope.sumthree = $scope.sumthree + 1;
            } else if ($scope.newEmp.EvaluationInfo.JobLearningEV == 2) {
                $scope.sumTwo = $scope.sumTwo + 1;
            } else if ($scope.newEmp.EvaluationInfo.JobLearningEV == 1) {
                $scope.sumOne = $scope.sumOne + 1;
            }
            // JobKnowledge_SkillEV
            if ($scope.newEmp.EvaluationInfo.JobKnowledge_SkillEV == 5) {
                $scope.sumFive = $scope.sumFive + 1;
            } else if ($scope.newEmp.EvaluationInfo.JobKnowledge_SkillEV == 4) {
                $scope.sumFour = $scope.sumFour + 1;
            } else if ($scope.newEmp.EvaluationInfo.JobKnowledge_SkillEV == 3) {
                $scope.sumthree = $scope.sumthree + 1;
            } else if ($scope.newEmp.EvaluationInfo.JobKnowledge_SkillEV == 2) {
                $scope.sumTwo = $scope.sumTwo + 1;
            } else if ($scope.newEmp.EvaluationInfo.JobKnowledge_SkillEV == 1) {
                $scope.sumOne = $scope.sumOne + 1;
            }
            // AdaptationEV
            if ($scope.newEmp.EvaluationInfo.AdaptationEV == 5) {
                $scope.sumFive = $scope.sumFive + 1;
            } else if ($scope.newEmp.EvaluationInfo.AdaptationEV == 4) {
                $scope.sumFour = $scope.sumFour + 1;
            } else if ($scope.newEmp.EvaluationInfo.AdaptationEV == 3) {
                $scope.sumthree = $scope.sumthree + 1;
            } else if ($scope.newEmp.EvaluationInfo.AdaptationEV == 2) {
                $scope.sumTwo = $scope.sumTwo + 1;
            } else if ($scope.newEmp.EvaluationInfo.AdaptationEV == 1) {
                $scope.sumOne = $scope.sumOne + 1;
            }
            // RulesRespectEV
            if ($scope.newEmp.EvaluationInfo.RulesRespectEV == 5) {
                $scope.sumFive = $scope.sumFive + 1;
            } else if ($scope.newEmp.EvaluationInfo.RulesRespectEV == 4) {
                $scope.sumFour = $scope.sumFour + 1;
            } else if ($scope.newEmp.EvaluationInfo.RulesRespectEV == 3) {
                $scope.sumthree = $scope.sumthree + 1;
            } else if ($scope.newEmp.EvaluationInfo.RulesRespectEV == 2) {
                $scope.sumTwo = $scope.sumTwo + 1;
            } else if ($scope.newEmp.EvaluationInfo.RulesRespectEV == 1) {
                $scope.sumOne = $scope.sumOne + 1;
            }
            // CommunicationEV
            if ($scope.newEmp.EvaluationInfo.CommunicationEV == 5) {
                $scope.sumFive = $scope.sumFive + 1;
            } else if ($scope.newEmp.EvaluationInfo.CommunicationEV == 4) {
                $scope.sumFour = $scope.sumFour + 1;
            } else if ($scope.newEmp.EvaluationInfo.CommunicationEV == 3) {
                $scope.sumthree = $scope.sumthree + 1;
            } else if ($scope.newEmp.EvaluationInfo.CommunicationEV == 2) {
                $scope.sumTwo = $scope.sumTwo + 1;
            } else if ($scope.newEmp.EvaluationInfo.CommunicationEV == 1) {
                $scope.sumOne = $scope.sumOne + 1;
            }
            // AttitudeEV
            if ($scope.newEmp.EvaluationInfo.AttitudeEV == 5) {
                $scope.sumFive = $scope.sumFive + 1;
            } else if ($scope.newEmp.EvaluationInfo.AttitudeEV == 4) {
                $scope.sumFour = $scope.sumFour + 1;
            } else if ($scope.newEmp.EvaluationInfo.AttitudeEV == 3) {
                $scope.sumthree = $scope.sumthree + 1;
            } else if ($scope.newEmp.EvaluationInfo.AttitudeEV == 2) {
                $scope.sumTwo = $scope.sumTwo + 1;
            } else if ($scope.newEmp.EvaluationInfo.AttitudeEV == 1) {
                $scope.sumOne = $scope.sumOne + 1;
            }
            // Planning_FollowingEV
            if ($scope.newEmp.EvaluationInfo.Planning_FollowingEV == 5) {
                $scope.sumFive = $scope.sumFive + 1;
            } else if ($scope.newEmp.EvaluationInfo.Planning_FollowingEV == 4) {
                $scope.sumFour = $scope.sumFour + 1;
            } else if ($scope.newEmp.EvaluationInfo.Planning_FollowingEV == 3) {
                $scope.sumthree = $scope.sumthree + 1;
            } else if ($scope.newEmp.EvaluationInfo.Planning_FollowingEV == 2) {
                $scope.sumTwo = $scope.sumTwo + 1;
            } else if ($scope.newEmp.EvaluationInfo.Planning_FollowingEV == 1) {
                $scope.sumOne = $scope.sumOne + 1;
            }
            // Decision_SolvingEV
            if ($scope.newEmp.EvaluationInfo.Decision_SolvingEV == 5) {
                $scope.sumFive = $scope.sumFive + 1;
            } else if ($scope.newEmp.EvaluationInfo.Decision_SolvingEV == 4) {
                $scope.sumFour = $scope.sumFour + 1;
            } else if ($scope.newEmp.EvaluationInfo.Decision_SolvingEV == 3) {
                $scope.sumthree = $scope.sumthree + 1;
            } else if ($scope.newEmp.EvaluationInfo.Decision_SolvingEV == 2) {
                $scope.sumTwo = $scope.sumTwo + 1;
            } else if ($scope.newEmp.EvaluationInfo.Decision_SolvingEV == 1) {
                $scope.sumOne = $scope.sumOne + 1;
            }
            // ResponsibilityEV
            if ($scope.newEmp.EvaluationInfo.ResponsibilityEV == 5) {
                $scope.sumFive = $scope.sumFive + 1;
            } else if ($scope.newEmp.EvaluationInfo.ResponsibilityEV == 4) {
                $scope.sumFour = $scope.sumFour + 1;
            } else if ($scope.newEmp.EvaluationInfo.ResponsibilityEV == 3) {
                $scope.sumthree = $scope.sumthree + 1;
            } else if ($scope.newEmp.EvaluationInfo.ResponsibilityEV == 2) {
                $scope.sumTwo = $scope.sumTwo + 1;
            } else if ($scope.newEmp.EvaluationInfo.ResponsibilityEV == 1) {
                $scope.sumOne = $scope.sumOne + 1;
            }
            // CooperationEV
            if ($scope.newEmp.EvaluationInfo.CooperationEV == 5) {
                $scope.sumFive = $scope.sumFive + 1;
            } else if ($scope.newEmp.EvaluationInfo.CooperationEV == 4) {
                $scope.sumFour = $scope.sumFour + 1;
            } else if ($scope.newEmp.EvaluationInfo.CooperationEV == 3) {
                $scope.sumthree = $scope.sumthree + 1;
            } else if ($scope.newEmp.EvaluationInfo.CooperationEV == 2) {
                $scope.sumTwo = $scope.sumTwo + 1;
            } else if ($scope.newEmp.EvaluationInfo.CooperationEV == 1) {
                $scope.sumOne = $scope.sumOne + 1;
            }
            // Sum
            $scope.newEmp.EvaluationInfo.SumP5EV = 5 * $scope.sumFive;
            $scope.newEmp.EvaluationInfo.SumP4EV = 4 * $scope.sumFour;
            $scope.newEmp.EvaluationInfo.SumP3EV = 3 * $scope.sumthree;
            $scope.newEmp.EvaluationInfo.SumP2EV = 2 * $scope.sumTwo;
            $scope.newEmp.EvaluationInfo.SumP1EV = 1 * $scope.sumOne;

        };


        $scope.Score = [5, 4, 3, 2, 1]
        $scope.done = function() {
            $scope.newEmp.EvaluationInfo.TotalScoreEV =
                ($scope.newEmp.EvaluationInfo.JobLearningEV) +
                ($scope.newEmp.EvaluationInfo.JobKnowledge_SkillEV) +
                ($scope.newEmp.EvaluationInfo.AdaptationEV) +
                ($scope.newEmp.EvaluationInfo.RulesRespectEV) +
                ($scope.newEmp.EvaluationInfo.CommunicationEV) +
                ($scope.newEmp.EvaluationInfo.AttitudeEV) +
                ($scope.newEmp.EvaluationInfo.Planning_FollowingEV) +
                ($scope.newEmp.EvaluationInfo.Decision_SolvingEV) +
                ($scope.newEmp.EvaluationInfo.ResponsibilityEV) +
                ($scope.newEmp.EvaluationInfo.CooperationEV);
            $scope.newEmp.EvaluationInfo.PercentEV = ($scope.newEmp.EvaluationInfo.TotalScoreEV) * (2);
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
