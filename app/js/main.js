require.config({

    paths: {
        angular: 'lib/angular/angular',
        angularResource: 'lib/angular-resource/angular-resource',
        angularRoute: 'lib/angular-route/angular-route',
        angularMocks: 'lib/angular-mocks/angular-mocks',
        metadata: 'metadata'
    },

    baseUrl: 'app/js',

    shim: {
        'angular': {
            'exports': 'angular'
        },
        'angularResource': {
            deps: ['angular']
        },
        'angularRoute': {
            deps: ['angular']
        },
        'angularMocks': {
            deps: ['angular'],
            'exports': 'angular.mock'
        }
    },

    priority: ['angular']
});

require([
        'angular',
        'app',
        'angularResource',
        'angularRoute',
        'angularMocks',
        'routes'
    ],

    function(angular, app) {

        'use strict';

        angular.bootstrap(document, [app.name]);
    });
