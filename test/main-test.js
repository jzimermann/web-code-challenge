require.config({
    paths: {
        angular: '/base/node_modules/angular/angular.min',
        angularResource: '/base/node_modules/angular-resource/angular-resource.min',
        angularRoute: '/base/node_modules/angular-route/angular-route.min',
        angularMocks: '/base/node_modules/angular-mocks/angular-mocks',
        metadata: 'metadata'
    },
    baseUrl: '/base/app/js',
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
    priority: [
        'angular'
    ]
});

require([
    'angular',
    'app',
    'routes',
    'angularMocks',
    'angularResource',
    'angularRoute',
    '/base/test/unit.js'
], function() {
    'use strict';
    window.__karma__.start();
});