define(['maps/controllers/maps.controller'], function(MapsController) {

    'use strict';

    describe('MapsController', function() {

        var controller, scope, location, q, httpStubberService, routesRequestService, routeConfiguratorService;

        var routes = {
            routes: [{
                route: 'route 1'
            }]
        }

        beforeEach(function() {

            module('components');
            module('maps');

            inject(function($injector, $rootScope, $location, $q) {
                scope = $rootScope;
                location = $location;
                q = $q;

                httpStubberService = $injector.get('HttpStubberService');
                routesRequestService = $injector.get('RoutesRequestService');
                routeConfiguratorService = $injector.get('RouteConfiguratorService');
            });
        });

        describe('loadRoutes', function() {
            it('should load all the routes for the app', function() {
                spyOn(routesRequestService, 'routes').andReturn(q.when(routes));

                controller = new MapsController(scope, location, httpStubberService, routesRequestService, routeConfiguratorService);
                scope.$apply();

                expect(scope.routes).toBe(routes);
            });
        });

        describe('goToRouteDetails', function() {
            it('should populate the configurator service and go to /route-details', function() {
                spyOn(routesRequestService, 'routes').andReturn(q.when(routes));
                spyOn(routeConfiguratorService, 'setRoute');
                spyOn(location, 'path');

                controller = new MapsController(scope, location, httpStubberService, routesRequestService, routeConfiguratorService);
                scope.$apply();
                scope.goToRouteDetails(1);

                expect(routeConfiguratorService.setRoute).toHaveBeenCalled();
            });
        });
    });
});