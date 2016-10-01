define(['../maps.module'],
    function(module) {

        'use strict';

        function mapsController($scope, $location) {

            function setupStubs() {
                console.log('Hello!');
            }

            setupStubs();
        }

        mapsController.$inject = ['$scope', '$location'];

        module.controller('MapsController', mapsController);

        return mapsController;
    });