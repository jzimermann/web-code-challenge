define(['../maps.module'], function(module, _) {
    'use strict';

    function travelStartFilter(RouteCalculatorService) {

        return function(route) {
            var travelStart = RouteCalculatorService.calculateTravelStartAndEnd(route).start;
            return travelStart;
        };
    }

    travelStartFilter.$inject = ['RouteCalculatorService'];

    module.filter('TravelStartFilter', travelStartFilter);

    return travelStartFilter;
});