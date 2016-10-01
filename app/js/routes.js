define(['angular', 'app'], function(angular, app) {
    'use strict';

    app.config(['$routeProvider', function($routeProvider) {

        $routeProvider.when('/maps', {
            templateUrl: 'app/js/maps/partials/maps.html',
            controller: 'MapsController',
            titleKey: 'MapsController.Title'
        });

        $routeProvider.when('/', {
            redirectTo: '/maps',
            titleKey: ''
        });

        $routeProvider.otherwise({
            redirectTo: '/maps'
        });
    }]);

    return app.run(['$location', '$rootScope', function($location, $rootScope) {
        $rootScope.$on('$routeChangeSuccess', function(event, current) {
            if (current.$$route) {
                $rootScope.titleKey = current.$$route.titleKey;
            }
        });
    }]);

});