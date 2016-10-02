define(['maps/controllers/maps.controller'], function (MapsController) {

    'use strict';

    describe('MapsController', function () {

        var controller, scope, location, httpStubberService, routesRequestService;

        beforeEach(function () {

            module('components');
            module('maps');
           
            inject(function ($injector, $rootScope, $location) {
                scope = $rootScope;
                location = $location;

                httpStubberService = $injector.get('HttpStubberService');
                routesRequestService = $injector.get('RoutesRequestService');
                
                controller = new MapsController(scope, location, httpStubberService, routesRequestService);
            });
        });

        describe('', function () {
            it('', function () {
                
                expect(true).toBeTruthy();
            });
        });
    });
});