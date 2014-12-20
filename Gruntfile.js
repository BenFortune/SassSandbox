'use strict';
module.exports = function(grunt) {

	// Load all required tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// Configure tasks
	grunt.initConfig({
		// user: grunt.file.readJSON('./../user.json'),
    sass: {
  		options: {
    		style: 'expanded'
  		},
  		main: {
  			files: {
  				'css/main.css': 'scss/main.scss'
  			}
  		},
    },
    watch: {
      options: {
        spawn: false,
        livereload: true,
      },
      main: {
        files: ['scss/main.scss'],
        tasks: ['main'],
      }
    }
	});
	grunt.registerTask('main', ['sass:main']);
};
