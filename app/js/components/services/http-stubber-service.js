define(['../components.module'], function(module) {
    'use strict';

    function httpStubberService($httpBackend) {

        function whenContentIs(content) {

            return {
                respondWith: function(httpStatus) {
                    var body;
                    $httpBackend.whenPOST('/maps', function(requestBody) {
                        body = JSON.parse(requestBody);
                        return body.html === content;
                    }).respond(function() {
                        var response = {};
                        return [httpStatus, response, {}];
                    });
                }
            };
        }

        return {
            whenContentIs: whenContentIs
        };
    }

    httpStubberService.$inject = ['$httpBackend'];

    module.service('HttpStubberService', httpStubberService);

    return httpStubberService;
});
