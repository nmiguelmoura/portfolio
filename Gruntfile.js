module.exports = function(grunt) {

  grunt.initConfig({
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'www/css/styles.min.css': ['www/css/reset.css','www/css/header.css', 'www/css/main.css']
        }
      }
    },
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [
              {
                name:'_small_1x',
                width: 480,
                quality:30
            },
            {
              name:'_small_2x',
              width: 960,
              quality:30
            },
            {
              name:'_medium_1x',
              width: 765,
              quality:30
            },
            {
              name:'_medium_2x',
              width: 1530,
              quality:30
            }
          ]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'assets/images_original/',
          dest: 'assets/images/'
        }]
      }
    },
    pagespeed: {
      options: {
        nokey: true,
        url: "http://experimentaciencia.casadasciencias.org"
      },
      prod: {
        options: {
          url: "http://experimentaciencia.casadasciencias.org",
          locale: "en_GB",
          strategy: "desktop",
          threshold: 80
        }
      },
      paths: {
        options: {
          paths: ["/"],
          locale: "en_GB",
          strategy: "mobile",
          threshold: 60
        }
      }
    }


  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-responsive-images');
  //grunt.loadNpmTasks('grunt-pagespeed');
  grunt.registerTask('default', ['cssmin','responsive_images'/*,'pagespeed'*/]);

};
