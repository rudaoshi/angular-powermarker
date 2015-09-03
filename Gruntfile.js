module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        bowercopy: {
            options: {
                srcPrefix: 'bower_components'
            }
            ,
            scripts: {
                options: {
                    destPrefix: 'vendor/javascripts'
                }
                ,
                files: {
                    'jquery.js': 'jquery/dist/jquery.js',
                    'angular.js': 'angularjs/angular.min.js',
                    'bootstrap.js':'bootstrap/dist/js/bootstrap.min.js',
                    'marked.js':'marked/lib/marked.js',
                    'highlight.js': 'highlight/build/highlight.pack.js'


                }
            },
            // Entire folders
            folders: {
                files: {
                    // Note: when copying folders, the destination (key) will be used as the location for the folder
                    'vendor/MathJax': 'MathJax',
                }
            },
            stylesheet: {

                options: {
                    destPrefix: 'vendor/stylesheets'
                }
                ,
                files: {
                    'bootstrap.css': 'bootstrap/dist/css/bootstrap.css',
                    'bootstrap.css.map': 'bootstrap/dist/css/bootstrap.css.map',
                    'highlight.css': 'highlight/src/styles/default.css'

                }

            },
            font: {
                options: {
                    destPrefix: 'vendor/fonts'
                }
                ,
                files: {
                    'glyphicons-halflings-regular.ttf': 'bootstrap/fonts/glyphicons-halflings-regular.ttf',
                    'glyphicons-halflings-regular.woff': 'bootstrap/fonts/glyphicons-halflings-regular.woff',
                    'glyphicons-halflings-regular.woff2': 'bootstrap/fonts/glyphicons-halflings-regular.woff2',
                }
            }

        }
    }
    );



    grunt.loadNpmTasks('grunt-bowercopy');

    grunt.registerTask('default', ['bowercopy']);

};