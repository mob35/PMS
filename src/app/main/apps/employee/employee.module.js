(function ()
{
    'use strict';

    angular
        .module('app.employee', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.employee', {
            url      : '/employee',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/apps/employee/employee.html',
                    controller : 'EmpController as vm',
                }
            },
            resolve  : {
                EmpPms: function (msApi)
                {
                    return msApi.resolve('emp.inbox@get');
                }
            },
            bodyClass: 'emp'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/apps/employee');

        // Api
        msApiProvider.register('emp.inbox', ['app/data/employee/empPms.json']);

        
        // Navigation
        msNavigationServiceProvider.saveItem('employee', {
            title : 'Employee Infomation',
            icon  : 'icon-people',
            state : 'app.employee',
            weight: 1
        });
    }
})();