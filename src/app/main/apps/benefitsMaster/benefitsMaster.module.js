(function ()
{
    'use strict';

    angular
        .module('app.benefitsMaster', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.benefitsMaster', {
            url      : '/benefitsMaster',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/apps/benefitsMaster/benefitsMaster.html',
                    controller : 'benefitsMasterController as vm'
                }
            },
            resolve  : {
                benefitsMaster: function (msApi)
                {
                    return msApi.resolve('emp.inbox@get');
                }
            },
            bodyClass: 'emp'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/apps/benefitsMaster');

        // Api
        msApiProvider.register('emp.inbox', ['app/data/employee/benefitsMaster.json']);

        
        // Navigation
        msNavigationServiceProvider.saveItem('benefitsMaster', {
            title : 'Benefits Master',
            icon  : 'icon-people',
            state : 'app.benefitsMaster',
            weight: 1
        });
    }
})();