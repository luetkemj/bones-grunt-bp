module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'library/js/scripts.js',
        dest: 'library/js/scripts.min.js'
      }
    },

    cmq: {
      options: {
        log: false
      },
      your_target: {
        files: {
          'library/css/tmp': ['library/css/*.css']
        }
      }
    },

    compass: {
      dist: {
        options: {
          cssDir: 'library/css',
          sassDir: 'library/scss',
          imagesDir: 'library/images',
          javascriptsDir: 'library/js',
          environment: 'development',
          relativeAssets: true,
          outputStyle: 'expanded',
          raw: 'preferred_syntax = :scss\n'
        }
      }
    },
           
    jshint: {
      all: ['Gruntfile.js', 'library/js/**/*.js']
    }


  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-combine-media-queries');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['uglify'], 'compass','cmq', 'jshint');

};