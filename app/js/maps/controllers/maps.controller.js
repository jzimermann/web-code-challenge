define(['../maps.module'],
    function(module) {

        'use strict';

        function mapsController($scope, $location, HttpStubberService, RoutesRequestService, RouteConfiguratorService) {

            function setupStubs() {
                HttpStubberService.forRouteRequest().respond();
            }

            function loadRoutes() {
                RoutesRequestService.routes().then(function(routes) {
                    $scope.routes = routes;
                });
            }

            $scope.goToRouteDetails = function(indexForRoute) {
                var route = $scope.routes[indexForRoute];
                RouteConfiguratorService.setRoute(route);
                $location.path('/route-details');
            };

            setupStubs();
            loadRoutes();
        }

        mapsController.$inject = ['$scope', '$location', 'HttpStubberService', 'RoutesRequestService', 'RouteConfiguratorService'];

        module.controller('MapsController', mapsController);

        return mapsController;
    });