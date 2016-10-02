define(['maps/services/route-calculator.service'], function(RouteCalculatorService) {

    'use strict';

    describe('RouteCalculatorService', function() {

        var service;

        var route = {
            'segments': [{
                'name': 'Segment 1',
                'stops': [{
                    'datetime': '2015-04-17T13:30:00+02:00'
                }, {
                    'datetime': '2015-04-17T13:38:00+02:00'
                }]
            }, {
                'name': 'Segment 2',
                'stops': [{
                    'datetime': '2015-04-17T13:38:00+02:00'
                }, {
                    'datetime': '2015-04-17T13:40:00+02:00'
                }]
            }]
        };

        beforeEach(function() {

            inject(function() {
                service = new RouteCalculatorService();
            });
        });

        describe('calculateTravelStartAndEnd', function() {

            it('should return an object with travel start and end', function() {
                var travelStartAndEnd = service.calculateTravelStartAndEnd(route);

                expect(travelStartAndEnd).toEqual({
                    start: '2015-04-17T13:30:00+02:00',
                    end: '2015-04-17T13:40:00+02:00'
                });
            });
        });

        describe('calculateTravelDuration', function() {

            it('should return the duration of a travel in minutes', function() {
                var travelDuration = service.calculateTravelDuration(route);

                expect(travelDuration).toBe(10);
            });
        });
    });
});