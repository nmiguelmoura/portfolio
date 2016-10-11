module.exports = function(grunt) {

  grunt.initConfig({
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'www/css/styles.min.css': ['www/css/reset.css','www/css/grid.css', 'www/css/styles.css']
        }
      }
    },
    uglify:{
      options:{
        banner:'/*Created by Nuno Machado*/\n'
      },
      build:{
        files:{
          'www/src/main.min.js':'www/src/Main.js'
        }
      }
    },
    //tile images
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [
            {
                name:'small',
                width: 236,
                quality:30
            },
            {
              name:'small_2x',
              width: 472,
              quality:30
            },
            {
              name:'medium',
              width: 322,
              quality:30
            },
            {
              name:'medium_2x',
              width: 644,
              quality:30
            },
            {
              name:'big',
              width: 380,
              quality:30
            },
            {
              name:'big_2x',
              width: 760,
              quality:30
            }
          ]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'image_src/tiles/',
          dest: 'www/assets/'
        }]
      }
    }
    //main image
    /*responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [
            {
              name:'small',
              width: 748,
              quality:30
            },
            {
              name:'small_2x',
              width: 1496,
              quality:30
            },
            {
              name:'medium',
              width: 1004,
              quality:30
            },
            {
              name:'medium_2x',
              width: 2008,
              quality:30
            },
            {
              name:'big',
              width: 1180,
              quality:30
            },
            {
              name:'big_2x',
              width: 2360,
              quality:30
            }
          ]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'image_src/main/',
          dest: 'www/assets/'
        }]
      }
    }*/
  });

  //build tasks
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['cssmin','uglify','responsive_images']);
};
