define(['../maps.module'],
    function(module) {

        'use strict';

        function mapsController($scope, $location, HttpStubberService, RoutesRequestService) {

            function setupStubs() {
                HttpStubberService.forRouteRequest().respond();
            }

            function getAllRoutes() {
                RoutesRequestService.routes().then(function(response) {
                    console.log(response.data);
                });
            }

            setupStubs();
            getAllRoutes();
        }

        mapsController.$inject = ['$scope', '$location', 'HttpStubberService', 'RoutesRequestService'];

        module.controller('MapsController', mapsController);

        return mapsController;
    });