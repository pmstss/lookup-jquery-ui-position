module.exports = function (grunt) {
    'use strict';

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        jsonlint: {
            dist: {
                src: [
                    '*.json'
                ]
            }
        },
    
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        'position.min.js'
                    ]
                }]
            }
        },        
        
        uglify: {
            options: {
                mangle: false
            },
            dist: {
                files: {
                    'position.min.js': ['position.js']
                }
            }
        }
    });

    grunt.registerTask('default', [
        'clean',
        'jsonlint',        
        'uglify'
    ]);
};
