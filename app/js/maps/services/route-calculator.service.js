define(['../maps.module'], function(module) {
    'use strict';

    function routeCalculatorService() {

        var MILISECONDS = 1000;
        var SECONDS = 60;

        function getAllDateTimes(route) {
            var datetimes = [];

            angular.forEach(route.segments, function(segment, index) {

                angular.forEach(segment.stops, function(stop, index) {

                    datetimes.push(stop.datetime);
                });
            });

            return datetimes;
        }

        function calculateTravelStartAndEnd(route) {
            var datetimes = getAllDateTimes(route);

            return {
                start: datetimes[0],
                end: datetimes[datetimes.length - 1]
            };
        }

        function calculateTravelDuration(route) {
            var travel = calculateTravelStartAndEnd(route);
            return (new Date(travel.end) - new Date(travel.start)) / MILISECONDS / SECONDS;
        }

        return {
            calculateTravelDuration: calculateTravelDuration,
            calculateTravelStartAndEnd: calculateTravelStartAndEnd,
        };
    }

    routeCalculatorService.$inject = [];

    module.service('RouteCalculatorService', routeCalculatorService);

    return routeCalculatorService;
});