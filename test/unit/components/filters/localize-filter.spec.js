define(['components/filters/localize-filter'], function(LocalizeFilter) {

    describe('LocalizeFilter', function() {

        var filter;

        beforeEach(function() {

            filter = new LocalizeFilter();
        });

        describe('when a key exists', function() {

            it('should translate the message', function() {

                expect(filter('MapsController.Title')).toBe('Maps');
            });
        });

        describe('when a key does not exist', function() {

            iit('should not translate the message', function() {

                expect(filter('MadeUpKey')).toBe('???MadeUpKey???');
            });
        });
    });
});