'use strict';

module.exports = function (grunt) {
    
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.loadNpmTasks('grunt-shell');

    var gulp = require('gulp');
    var sass = require('gulp-sass');
    var jshint = require('gulp-jshint');
    var stylish = require('jshint-stylish');
    var map = require('map-stream');
    var eslint = require('gulp-eslint');
    var jsinspect = require('gulp-jsinspect');

    grunt.initConfig({
        
        ally: {
            app: 'app',
            dist: 'dist',
            temp: 'temp'
        },
        gulp: {
            sass: function () {
                return gulp.src('app/css/app.scss')
                    .pipe(sass())
                    .pipe(gulp.dest('dist/ally/app/css/'));
            },
            jshint: function () {
                var lintableScripts = [
                    'app/js/**/*.js',
                    'test/**/*.js',
                    '!app/js/lib/**/*.js'];
                return gulp.src(lintableScripts)
                    .pipe(jshint())
                    .pipe(jshint.reporter(stylish))
                    .pipe(jshint.reporter('fail'));
            },
            eslint: function(){
                var eslintableScripts = [
                    'app/app.js',
                    'app/main.js',
                    'app/routes.js',
                    'app/js/**/*.js',
                    'test/**/*.js'];

                return gulp.src(eslintableScripts)
                    .pipe(eslint())
                    .pipe(eslint.format())
                    .pipe(eslint.failAfterError());
                return failure;
            },
            jsinspect: function(){
                var jsinspectable = [
                    'app/app.js',
                    'app/main.js',
                    'app/routes.js',
                    'app/js/**/*.js',
                    '!test/**/*.js',
                    '!app/js/main-mock.js'];

                return gulp.src(jsinspectable)
                    .pipe(jsinspect({
                        'threshold':   10,
                        'identifiers': true,
                        'suppress':    0
                    }));
            }
        },
        watch: {
            js: {
                files: ['<%= ally.app %>/js/{,*/}*.js'],
                tasks: ['gulp:jshint', 'copy:dist'],
                options: {
                    livereload: true
                }
            },
            jsTest: {
                files: ['test/unit/{,*/}*.js'],
                tasks: ['gulp:jshint', 'karma']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            partials: {
                options: {
                    livereload: true
                },
                tasks: ['copy:dist'],
                files: ['app/js/**/partials/{,*/}*.html']
            },
            css: {
                files: ['<%= ally.app %>/css/{,*/}*.scss', '<%= ally.app %>/css/modules/components/{,*/}*.scss'],
                tasks: ['gulp:sass'],
                options: {
                    livereload: true
                }
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= ally.app %>/{,*/}*.html',
                    'dist/ally/app/css/{,*/}*.css'
                ]
            }
        },
        connect: {
            options: {
                hostname: '*',
                port: 8080
            },
            livereload: {
                options: {
                    livereload: 35729,
                    open: 'http://localhost:<%= connect.options.port %>/ally/<%= grunt.option("mock") ? "index-mock.html" : "" %>',
                    base: '<%= ally.dist %>'
                }
            },
            dist: {
                options: {
                    port: 8080,
                    open: false,
                    base: '<%= ally.dist %>'
                }
            }
        },
        clean: {
            dist: {
                files: [
                    {
                        dot: true,
                        src: [
                            '<%= ally.dist %>/*',
                            '!<%= ally.dist %>/.git*'
                        ]
                    }
                ]
            }
        },
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= ally.app %>',
                        dest: '<%= ally.dist %>/ally/app',
                        src: [ 'js/**/partials/{,*/}*.html']
                    },
                    {
                        expand: true,
                        cwd: 'node_modules/angular',
                        dest: '<%= ally.dist %>/ally/app/js/lib/angular',
                        src: '{,**/}*.*'
                    },
                    {
                        expand: true,
                        cwd: 'node_modules/angular-mocks',
                        dest: '<%= ally.dist %>/ally/app/js/lib/angular-mocks',
                        src: '{,**/}*.*'
                    },
                    {
                        expand: true,
                        cwd: 'node_modules/angular-resource',
                        dest: '<%= ally.dist %>/ally/app/js/lib/angular-resource',
                        src: '{,**/}*.*'
                    },
                    {
                        expand: true,
                        cwd: 'node_modules/angular-route',
                        dest: '<%= ally.dist %>/ally/app/js/lib/angular-route',
                        src: '{,**/}*.*'
                    },
                    {
                        expand: true,
                        cwd: 'node_modules/requirejs',
                        dest: '<%= ally.dist %>/ally/app/js/lib/requirejs',
                        src: '{,**/}*.*'
                    },
                    {
                        expand: true,
                        cwd: 'node_modules/flexboxgrid',
                        dest: '<%= ally.dist %>/ally/app/css/flexboxgrid',
                        src: '{,**/}*.*'
                    },
                    {
                        cwd: 'WebContent',
                        src: ["*.html", "*.js"],
                        dest: '<%= ally.dist %>/ally',
                        expand: true
                    },
                    {
                        cwd: '<%= ally.app %>/js',
                        dest: '<%= ally.dist %>/ally/app/js',
                        src: '{,**/}*.js',
                        expand: true
                    },
                    {
                        cwd: '<%= ally.app %>/css/icons',
                        dest: '<%= ally.dist %>/ally/app/css',
                        src: '{,**/}*.*',
                        expand: true
                    }
                ]
            }
        },
        karma: {
            unit: {
                configFile: 'config/karma.conf.js',
                singleRun: grunt.option('once')
            },
            once: {
                configFile: 'config/karma.conf.js',
                singleRun: true
            }
        },
        shell: {
            options: {
                cuke: 'bundle exec cucumber',
                flags: '--color --format html --out ../build/iso-reports/index.html --format pretty features/isolation',
                env: '<%= grunt.option("firefox") ? "BROWSER=firefox" : "BROWSER=headless" %>',
                make_dir: 'mkdir -p ../build/iso-reports;'
            },
            iso_tests: {
                options: {
                    execOptions: {
                        maxBuffer: Infinity,
                        cwd: '../'
                    }
                },
                command: '<%= shell.options.make_dir %> <%= shell.options.cuke %> <%= shell.options.env %> <%= shell.options.flags %>'
            }
        }
    });

    grunt.registerTask('serve', [
        'clean:dist',
        'gulp:sass',
        'copy:dist',
        'connect:livereload',
        'watch'
    ]);

    grunt.registerTask('test', [ 'lint', 'karma:unit' ]);

    grunt.registerTask('lint', [ 'gulp:jshint']);
};
