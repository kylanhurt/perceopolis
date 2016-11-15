module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },

    less: {
        build: {
            files : {
                'dist/css/main.css': 'src/less/main.less'
            }
        }
    },

      // configure cssmin to minify css files ------------------------------------
      cssmin: {
          options: {
              banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
          },
          build: {
              files: {
                  'dist/css/style.min.css': 'src/css/style.css'
              }
          }
      } ,

      build: ['Gruntfile.js', 'src/**/*.js']

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['jshint']);

};