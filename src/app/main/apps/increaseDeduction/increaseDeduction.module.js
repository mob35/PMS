(function ()
{
    'use strict';

    angular
        .module('app.increaseDeduction', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.increaseDeduction', {
            url      : '/increaseDeduction',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/apps/increaseDeduction/increaseDeduction.html',
                    controller : 'increDeducController as vm'
                }
            },
            resolve  : {
                increDeduc: function (msApi)
                {
                    return msApi.resolve('emp.inbox@get');
                }
            },
            bodyClass: 'emp'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/apps/increaseDeduction');

        // Api
        msApiProvider.register('emp.inbox', ['app/data/employee/increDeduc.json']);

        
        // Navigation
        msNavigationServiceProvider.saveItem('increaseDeduction', {
            title : 'Increase / Deduction',
            icon  : 'icon-currency-usd',
            state : 'app.increaseDeduction',
            weight: 1
        });
    }
})();