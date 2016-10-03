define(['maps/filters/travel-type.filter'], function(TravelTypeFilter) {

    'use strict';

    describe('TravelTypeFilter', function() {

        var filter;

        beforeEach(function() {

            module('components');
            module('maps');
        });


        it('should display the travel type with no underscore', function() {
            filter = new TravelTypeFilter();

            expect(filter('public_transportation')).toEqual('public transportation');
        });
    });
});