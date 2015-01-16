'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    express: {
      options: {
        // Override defaults here
      },
      web: {
        options: {
          script: './lib/bin/www',
        }
      },
    },
    compass: {       // Task
      dist: {        // Target
        options: {   // Target options
          sassDir: './app/public/css/sass',
          cssDir: './app/public/css/compiled',
          environment: 'production'
        }
      },
      dev: { // Another target
        options: {
          sassDir: './app/public/css/sass',
          cssDir: './app/public/css/compiled'
        }
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['compass'],
        options: {
          livereload: true,
        }
      },
      frontend: {
        files: [
          // triggering livereload when the .css file is updated
          // (compared to triggering when sass completes)
          // allows livereload to not do a full page refresh
          './app/view/*.jade',
          './app/public/js/**/*.js',
          './app/public/imgs/**/*'
        ]
      },
      web: {
        files: [
          './lib/**/*.js',
          './test/**/*.js',
        ],
        tasks: [
          'express:web'
        ],
        options: {
          nospawn: true, //Without this option specified express won't be reloaded
          atBegin: true,
        }
      }
    },
    parallel: {
      web: {
        options: {
          stream: true
        },
        tasks: [{
          grunt: true,
          args: ['watch:frontend']
        }, {
          grunt: true,
          args: ['watch:web']
        }, {
          grunt: true,
          args: ['watch:css']
        }]
      },
    },
    open : {
      dev : {
        path: 'http://127.0.0.1:3000/',
        app: 'Google Chrome'
      },
      build : {
        path : 'http://google.com/',
        app: 'Firefox'
      },
      file : {
        path : './lib/bin/www'
      }
    }
  });
  grunt.registerTask('web', 'launch webserver and watch tasks', [
    'parallel:web',
    'open:server'
  ]);

  grunt.registerTask('default', ['web']);
};
