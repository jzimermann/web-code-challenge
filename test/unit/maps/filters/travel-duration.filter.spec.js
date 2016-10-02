define(['maps/filters/travel-duration.filter'], function(TravelDurationFilter) {

    'use strict';

    describe('TravelDurationFilter', function() {

        var filter, routeCalculatorService;

        beforeEach(function() {

            module('components');
            module('maps');

            inject(function($injector) {
                routeCalculatorService = $injector.get('RouteCalculatorService');
            });
        });


        it('should display the duration of a travel in minutes', function() {
            spyOn(routeCalculatorService, 'calculateTravelDuration').andReturn(10);

            filter = new TravelDurationFilter(routeCalculatorService);

            expect(filter()).toEqual('10 minutes');
        });
    });
});