module.exports = function(grunt) {

// Project configuration.
grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	jshint: {
		all: ['Gruntfile.js', 'src/javascript-dfp.js']
	},
	uglify: {
		build: {
			src: 'src/javascript-dfp.js',
			dest: 'dist/javascript-dfp.min.js'
		}
	},
	htmlmin: {                                     // Task 
    dist: {                                      // Target 
      options: {                                 // Target options 
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   // Dictionary of files 
        'dist/dfp-ad.html': 'src/dfp-ad.html'    // 'destination': 'source' 
      }
    }
  },
  watch: {
    files: ['src/'],
    tasks: ['jshint','uglify','htmlmin']
   }
});

// Load the plugin that provides the "jshint" task.
grunt.loadNpmTasks('grunt-contrib-jshint');

// Load the plugin that provides the "uglify" task.
grunt.loadNpmTasks('grunt-contrib-uglify');

// Load the plugin that provides the "htmlmin" task.
grunt.loadNpmTasks('grunt-contrib-htmlmin');

//Load the plugin that provides the "watch" task.
grunt.loadNpmTasks('grunt-contrib-watch');

// Default task(s).
grunt.registerTask('default', ['jshint', 'uglify','htmlmin']);

};
