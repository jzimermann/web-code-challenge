define(['../maps.module'], function(module) {
    'use strict';

    function routesRequestService($http) {

        function routes() {
            return $http.post('/routes');
        }

        return {
            routes: routes
        };
    }

    routesRequestService.$inject = ['$http'];

    module.service('RoutesRequestService', routesRequestService);

    return routesRequestService;
});