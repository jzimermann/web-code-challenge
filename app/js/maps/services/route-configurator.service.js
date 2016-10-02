define(['../maps.module'], function(module) {
    'use strict';

    function routeConfiguratorService() {

        var route;

        function setRoute(newRoute) {
            route = newRoute;
        }

        function getRoute() {
            return route;
        }

        return {
            setRoute: setRoute,
            getRoute: getRoute
        };
    }

    routeConfiguratorService.$inject = [];

    module.service('RouteConfiguratorService', routeConfiguratorService);

    return routeConfiguratorService;
});