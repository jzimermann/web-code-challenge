define(['../maps.module'],
    function(module) {

        'use strict';

        function routeDetailsController($scope, RouteConfiguratorService) {

            function displayRouteDetails() {
                $scope.route = RouteConfiguratorService.getRoute();
            }

            displayRouteDetails();
        }

        routeDetailsController.$inject = ['$scope', 'RouteConfiguratorService'];

        module.controller('RouteDetailsController', routeDetailsController);

        return routeDetailsController;
    });