module.exports = function(grunt) {
  // TODO: Update the HTML file so it can pull data and autosplit and such from source
  // TODO: This can be 1,000 times better with rules from the HTML file and usemin

  var buildPath = 'build';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    copy: {
      main: {
        files: [
          {src: ['app/favicon.ico'], dest: buildPath + '/favicon.ico'},
          {expand: true, flatten: true, src: ['app/*.html'],           dest: buildPath + '/'},
          {expand: true, flatten: true, src: ['app/images/*'],         dest: buildPath + '/images'},
          {expand: true, flatten: true, src: ['app/scripts/*'],        dest: buildPath + '/scripts'},
          {expand: true, flatten: true, src: ['app/scripts/vendor/*'], dest: buildPath + '/scripts/vendor'}
        ]
      },
      html: {
        files: [
          {src: ['app/index.html'], dest: buildPath + '/index.html'},
        ]
      }
    },

    sass: {
      build: {
        options: {
          style: 'compressed'
        },
        files: [{
          src: 'app/sass/main.scss',
          dest: buildPath + '/main.css'
        }]
      },
      watch: {
        options: {
          style: 'compact'
        },
        files: [{
          src: 'app/sass/main.scss',
          dest: buildPath + '/main.css'
        }]
      },
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        mangle: false,
        compress: false,
      }
    },

    useminPrepare: {
      options: {
        dest: 'build'
      },
      html: 'index.html'
    },

    usemin: {
      html: [buildPath + '/index.html']
    },

    watch: {
      html: {
        files: ['app/*.html'],
        tasks: ['copy:html'],
      },
      sass: {
        files: ['app/sass/**/*.scss'],
        tasks: ['sass'],
      }
    }

  });

  // Load plugins
  require('load-grunt-tasks')(grunt);

  // Default tasks
  grunt.registerTask('default', ['copy', 'uglify', 'sass:watch', 'useminPrepare', 'usemin', 'watch']);
  grunt.registerTask('build',   ['copy', 'uglify', 'sass:build', 'useminPrepare', 'usemin']);
};

