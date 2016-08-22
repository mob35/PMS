(function ()
{
	'use strict';

	angular
		.module('app.test', [])
		.config(config);



	/** @ngInject*/
	function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
	{
		// State
		$stateProvider
			.state('app.test', {
				url    : '/test',
				views  : {
					'content@app' : {
						templateUrl: 'app/main/mob/test.html',
						controller : 'testController as vm'
					}
				}
			});

		// Translation
		$translatePartialLoaderProvider.addPart('app/main/mob');

		// Api
		msApiProvider.register('mob', []);

		// Navigation
		msNavigationServiceProvider.saveItem('fuse.test', {
			title	: 'EMP',
			icon 	: 'icon-tile-four',
			state 	: 'app.test',
			// stateParams : {
			// 	'param1' : 'page'
			// },
			//translate : 'NAME.NAME_NAV',
			weight 	: 1
		});
	}
})();