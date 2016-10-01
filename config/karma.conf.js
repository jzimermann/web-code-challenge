module.exports = function(config) {
    config.set({
        basePath: '../',

        frameworks: ['jasmine', 'requirejs'],

        files: [{
                pattern: 'app/js/**/*.js',
                included: false
            }, {
                pattern: 'test/unit/**/*.js',
                included: false
            }, {
                pattern: 'test/unit.js',
                included: false
            }, {
                pattern: 'node_modules/**/*.js',
                included: false
            },
            'test/main-test.js'
        ],

        preprocessors: {
            '**/app/js/!(mocks)/**/*.js': ['coverage']
        },

        reporters: ['dots', 'html', 'coverage'],

        htmlReporter: {
            outputDir: 'build/test-results/reports'
        },

        coverageReporter: {
            dir: 'build/test-results/coverage/',
            reporters: [{
                type: 'html'
            }, {
                type: 'lcovonly'
            }]
        },

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: true,

        browsers: ['PhantomJS'],

        captureTimeout: 20000,

        singleRun: false,

        reportSlowerThan: 500

    });
};