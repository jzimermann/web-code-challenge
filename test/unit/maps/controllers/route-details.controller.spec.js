define(['maps/controllers/route-details.controller'], function(RouteDetailsController) {

    'use strict';

    describe('RouteDetailsController', function() {

        var controller, scope, routeConfiguratorService;

        var route = {
            route: 'route 1'
        };

        beforeEach(function() {

            module('components');
            module('maps');

            inject(function($injector, $rootScope) {
                scope = $rootScope;

                routeConfiguratorService = $injector.get('RouteConfiguratorService');
            });
        });

        describe('displayRouteDetails', function() {
            it('should load the details of a route', function() {
                spyOn(routeConfiguratorService, 'getRoute').andReturn(route);

                controller = new RouteDetailsController(scope, routeConfiguratorService);

                expect(scope.route).toBe(route);
            });
        });
    });
});