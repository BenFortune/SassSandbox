module.exports = {
	dist: {
		options: {
			transform: [
				['babelify', {
					'presets': ['es2015'],
					'plugins': ['transform-object-assign']
				}]
			]
		},
		files: {
			'js/main.js': ['js/index.js']
		}
	}
}
