define(['../maps.module'],
    function(module) {

        'use strict';

        function mapsController($scope, $location, HttpStubberService, RoutesRequestService) {

            function setupStubs() {
                HttpStubberService.forRouteRequest().respond();
            }

            function getAllRoutes() {
                RoutesRequestService.routes().then(function(routes) {
                    console.log(routes);
                });
            }

            setupStubs();
            getAllRoutes();
        }

        mapsController.$inject = ['$scope', '$location', 'HttpStubberService', 'RoutesRequestService'];

        module.controller('MapsController', mapsController);

        return mapsController;
    });