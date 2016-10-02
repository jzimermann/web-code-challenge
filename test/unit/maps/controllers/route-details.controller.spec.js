define(['maps/controllers/maps.controller'], function(RouteDetailsController) {

    'use strict';

    describe('RouteDetailsController', function() {

        var controller, scope;

        beforeEach(function() {

            module('components');
            module('maps');

            inject(function($injector, $rootScope) {
                scope = $rootScope;

                controller = new RouteDetailsController(scope);
            });
        });

        describe('', function() {
            it('', function() {

                expect(true).toBeTruthy();
            });
        });
    });
});