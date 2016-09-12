(function() {
    'use strict';

    angular
        .module('app.employee')
        .controller('DeductionDialogController', DeductionDialogController);

    /** @ngInject */
    function DeductionDialogController($mdDialog, $scope, selectedMail, employeeService) {
        $scope.selectedEval = {
            "PersonalInfo": {
                "EmpID": "1",
                "FirstNameTH": "Apple",
                "LastNameTH": "Dook",
                "FirstNameEN": "sample string 4",
                "LastNameEN": "sample string 5",
                "Position": "programmer",
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
            "EvaluationInfo": {
                "EmpID": "sample string 1",
                "DateConfirmedEV": "2016-09-07T16:14:25.6154237+07:00",
                "JobLearningEV": 2,
                "JobKnowledge_SkillEV": 3,
                "AdaptationEV": 4,
                "RulesRespectEV": 5,
                "CommunicationEV": 6,
                "AttitudeEV": 7,
                "Planning_FollowingEV": 8,
                "Decision_SolvingEV": 9,
                "ResponsibilityEV": 10,
                "CooperationEV": 11,
                "SumP5EV": 12,
                "SumP4EV": 13,
                "SumP3EV": 14,
                "SumP2EV": 15,
                "SumP1EV": 16,
                "TotalScoreEV": 17,
                "PercentEV": 18,
                "OtherEV": "sample string 19",
                "EvaluationTypeEV": "sample string 20",
                "ObjectState": 0,
                "Created": "2016-09-07T16:14:25.6154237+07:00",
                "CreatedBy": "sample string 21",
                "Updated": "2016-09-07T16:14:25.6154237+07:00",
                "UpdatedBy": "sample string 22"
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

        $scope.closeDialog = function() {
            $mdDialog.hide();
        }
    } //end controler

})();
