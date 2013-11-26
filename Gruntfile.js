/*
 * grunt-handlebars-template
 * http://gruntjs.com/
 *
 * Copyright (c) 2013 Bret K. Ikehara
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
    "use strict";
    var REGEX_FILE_NAME = /^.+\/([^\/]+)\..+$/i;

    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                'tasks/lib/*.js',
                '<%= nodeunit.tests %>'
            ]
        },
        handlebars: {
            compile: {
                options: {
                    opts: {
                        namespace: 'JST'
                    }
                },
                files: {
                    'tmp/handlebars-template.js': [
                        'test/src/*.hbs'
                    ]
                }
            }
        },
        nodeunit: {
            tests: ['test/test-*.js']
        }
    });

    grunt.loadTasks('tasks');

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    grunt.registerTask('test', ['nodeunit']);
    grunt.registerTask('default', ['jshint', 'test']);
};