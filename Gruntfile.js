'use strict';

var path = require('path');
var autoprefixer = require('autoprefixer');
var browserSupport = ['Chrome >= 14', 'Firefox >= 3.6', 'Safari >= 5', 'Explorer >= 9'];

module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      options: {
        browserifyOptions: {
          transform: [
            'babelify'
          ]
        }
      },

      dist: {
        files: {
          'dist/animations.js': 'src/main.js'
        }
      },

      sample: {
        files: {
          'sample/sample.bundle.js': 'sample/sample.js'
        }
      }
    },

    sass: {
      dist: {
        files: {
          'dist/animations.css': 'scss/animations.scss'
        }
      }
    },

    watch: {
      options: {
        spawn: false,
        interrupt: true
      },
      js: {
        files: ['src/**/*.js'],
        tasks: ['browserify']
      },
      scss: {
        files: ['scss/**/*.scss'],
        tasks: ['sass']
      }
    },

    cssmin: {
      target: {
        files: [
          {
            expand: true,
            cwd: 'dist/',
            src: ['*.css', '!*.min.css'],
            dest: 'dist/',
            ext: '.min.css'
          }
        ]
      }
    },

    postcss: {
      options: {
        processors: [
          autoprefixer({
            browsers: browserSupport
          })
        ]
      },
      dist: {
        src: 'dist/animations.css'
      }
    },

    clean: {
      dist: ['dist/**/*']
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', []);
  grunt.registerTask('build', [
    'clean',
    'browserify',
    'sass',
    'postcss'
  ]);
};
