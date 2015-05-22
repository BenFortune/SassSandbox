'use strict';
module.exports = function(grunt) {

	// Load all required tasks
	require('load-grunt-config')(grunt);

	grunt.registerTask('default', ['csscomb:main', 'sass:main']);
	// Configure and register Grunt tasks in grunt/ folder
};
