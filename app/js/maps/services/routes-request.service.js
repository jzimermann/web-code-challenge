define(['../maps.module'], function(module) {
    'use strict';

    function routesRequestService($http) {

        function get() {
            return $http.get('/routes');
        }

        return {
            get: get
        };
    }

    routesRequestService.$inject = ['$http'];

    module.service('RoutesRequestService', routesRequestService);

    return routesRequestService;
});