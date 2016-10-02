define(['maps/services/routes-request.service'], function(RoutesRequestService) {

    'use strict';

    describe('RoutesRequestService', function() {

        var service, http, q, scope, pass, fail;

        beforeEach(function() {

            inject(function($rootScope, $injector, $http, $q) {
                scope = $rootScope;
                http = $http;
                q = $q;

                service = new RoutesRequestService(http);
            });


            pass = jasmine.createSpy('pass');
            fail = jasmine.createSpy('fail');
        });

        describe('routes', function() {

            describe('when the response succeeds', function() {
                it('should return the routes for ally app', function() {

                    var data = {
                        route: 'route'
                    };

                    spyOn(http, 'post').andReturn(q.when(data));

                    service.routes()
                        .then(pass)
                        .catch(fail);

                    scope.$apply();

                    expect(http.post).toHaveBeenCalledWith('/routes');
                    expect(pass).toHaveBeenCalledWith(data);
                    expect(fail).not.toHaveBeenCalled();
                });
            });

            describe('when the response fails', function() {
                it('should return no routes', function() {

                    spyOn(http, 'post').andReturn(q.reject());

                    service.routes()
                        .then(fail)
                        .catch(pass);

                    scope.$apply();

                    expect(http.post).toHaveBeenCalledWith('/routes');
                    expect(pass).toHaveBeenCalled();
                    expect(fail).not.toHaveBeenCalled();
                });
            });
        });
    });
});