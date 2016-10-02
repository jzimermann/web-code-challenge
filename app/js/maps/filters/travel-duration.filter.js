define(['../maps.module'], function(module, _) {
    'use strict';

    function travelDurationFilter(RouteCalculatorService) {

        return function(route) {
            var travelDuration = RouteCalculatorService.calculateTravelDuration(route);
            return travelDuration + ' minutes';
        };
    }

    travelDurationFilter.$inject = ['RouteCalculatorService'];

    module.filter('TravelDurationFilter', travelDurationFilter);

    return travelDurationFilter;
});