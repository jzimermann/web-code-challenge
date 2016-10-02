define(['../maps.module'], function(module, _) {
    'use strict';

    function travelEndFilter(RouteCalculatorService) {

        return function(route) {
            var travelEnd = RouteCalculatorService.calculateTravelStartAndEnd(route).end;
            return travelEnd;
        };
    }

    travelEndFilter.$inject = ['RouteCalculatorService'];

    module.filter('TravelEndFilter', travelEndFilter);

    return travelEndFilter;
});