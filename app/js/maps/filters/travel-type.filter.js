define(['../maps.module'], function(module, _) {
    'use strict';

    function travelTypeFilter() {

        return function(type) {
            return type.replace('_', ' ');
        };
    }

    travelTypeFilter.$inject = [];

    module.filter('TravelTypeFilter', travelTypeFilter);

    return travelTypeFilter;
});