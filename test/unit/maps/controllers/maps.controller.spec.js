define(['maps/controllers/maps.controller'], function (MapsController) {

    'use strict';

    describe('MapsController', function () {

        var controller, scope, location;

        beforeEach(function () {

            module('components');
           
            inject(function ($injector, $rootScope, $location) {
                scope = $rootScope;
                location = $location;
                
                controller = new MapsController(scope, location);
            });
        });

        describe('', function () {
            it('', function () {
                
                expect(true).toBeTruthy();
            });
        });
    });
});