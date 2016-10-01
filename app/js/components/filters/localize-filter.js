define(['../components.module', 'messages/appLocalization'], function (module, appLocalization) {
    'use strict';

    function localizeFilter() {

        return function (text) {

            var localizedText = appLocalization[text];

            if (undefined === localizedText) {
                localizedText = '???' + text + '???';
            }

            return localizedText;
        };
    }

    localizeFilter.$inject = [];

    module.filter('localize', localizeFilter);

    return localizeFilter;
});
