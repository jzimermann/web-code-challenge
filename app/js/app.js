define([
    'angular',
    'angularMocks',
    'components/components.package',
    'maps/maps.package'
], function (angular, angularMocks, components, maps) {
    'use strict';

    var app = angular.module('ally', ['ngRoute', 'ngMockE2E', components, maps]);

    app.run(['$httpBackend', function ($httpBackend) {
        $httpBackend.whenGET(new RegExp('.*')).passThrough();
        $httpBackend.whenPOST(new RegExp('[^/mobilePrint]')).passThrough();
    }]);

    return app;
});
