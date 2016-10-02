define(['maps/filters/travel-end.filter'], function(TravelEndFilter) {

    'use strict';

    describe('TravelEndFilter', function() {

        var filter, routeCalculatorService;

        beforeEach(function() {

            module('components');
            module('maps');

            inject(function($injector) {
                routeCalculatorService = $injector.get('RouteCalculatorService');
            });
        });


        it('should display the end time of travel', function() {
            spyOn(routeCalculatorService, 'calculateTravelStartAndEnd').andReturn({
                start: '2015-04-17T13:30:00+02:00', 
                end: '2015-04-17T13:38:00+02:00'
            });

            filter = new TravelEndFilter(routeCalculatorService);

            expect(filter()).toEqual('2015-04-17T13:38:00+02:00');
        });
    });
});