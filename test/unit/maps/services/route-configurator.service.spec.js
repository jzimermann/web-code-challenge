define(['maps/services/route-configurator.service'], function(RouteConfiguratorService) {

    'use strict';

    describe('RouteConfiguratorService', function() {

        var service;

        beforeEach(function() {

            inject(function() {
                service = new RouteConfiguratorService();
            });
        });

        describe('Get Routes', function() {

            it('should return a route', function() {
                var route = 'route';
                service.setRoute(route);
                expect(service.getRoute()).toEqual(route);
            });

        });
    });
});