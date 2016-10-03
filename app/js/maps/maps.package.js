define([
    './maps.module',
    './controllers/maps.controller',
    './controllers/route-details.controller',
    './services/routes-request.service',
    './services/route-calculator.service',
    './services/route-configurator.service',
    './filters/travel-start.filter',
    './filters/travel-end.filter',
    './filters/travel-duration.filter',
    './filters/travel-type.filter'
], function(module) {
    'use strict';
    return module.name;
});