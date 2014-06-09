module.exports = function(grunt) {

/*
@TODO: get some watch tasks running so i don't need to compile everything always

@TODO: reconfigure the scss folder and use this plugin to install it.https://www.npmjs.org/package/grunt-curl

@TODO: Get this repo setup outside of the bones theme. No reason to have it sit inside of a theme in the repo.
*/

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
          raw: 'preferred_syntax = :scss\n',
          require: 'susy'
        }
      }
    },
           
    jshint: {
      all: ['Gruntfile.js', 'library/js/scripts.js']
    },

    watch: {
      scripts: {
        files: ['**/*.js'],
        tasks: ['jshint'],
        options: {
          spawn: true,
        },
      },
    },


  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-combine-media-queries');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify'], 'compass','cmq');
  grunt.registerTask('lint', 'jshint');

};