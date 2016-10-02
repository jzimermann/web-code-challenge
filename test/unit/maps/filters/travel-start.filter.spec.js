define(['maps/filters/travel-start.filter'], function(TravelStartFilter) {

    'use strict';

    describe('TravelStartFilter', function() {

        var filter, routeCalculatorService;

        beforeEach(function() {

            module('components');
            module('maps');

            inject(function($injector) {
                routeCalculatorService = $injector.get('RouteCalculatorService');
            });
        });


        it('should display the start time of travel', function() {
            spyOn(routeCalculatorService, 'calculateTravelStartAndEnd').andReturn({
                start: '2015-04-17T13:30:00+02:00', 
                end: '2015-04-17T13:38:00+02:00'
            });

            filter = new TravelStartFilter(routeCalculatorService);

            expect(filter()).toEqual('2015-04-17T13:30:00+02:00');
        });
    });
});