module.exports = {
	'default': [
		'csscomb:css',
		'sass:css',
		'concat:css',
		'cssmin:css',
		'browserify',
		'concat:js'
	],
	'sassdoc': [
		'sassdoc:fileOnly'
	],
	'css': [
		'csscomb:css',
		'sass:css',
		'concat:css',
		'cssmin:css'
	],
	'js': [
		'browserify',
		'concat:js'
	]
}
