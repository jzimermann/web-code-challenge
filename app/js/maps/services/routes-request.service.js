define(['../maps.module'], function(module) {
    'use strict';

    function routesRequestService($http, $q) {

        var requestPromise;

        function handleSuccess(response) {
            requestPromise.resolve(response.data.routes);
        }

        function handleFailure() {
            requestPromise.reject();
        }

        function routes() {
            requestPromise = $q.defer();

            $http.post('/routes')
                .then(handleSuccess)
                .catch(handleFailure);

            return requestPromise.promise;
        }

        return {
            routes: routes
        };
    }

    routesRequestService.$inject = ['$http', '$q'];

    module.service('RoutesRequestService', routesRequestService);

    return routesRequestService;
});