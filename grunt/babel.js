module.exports = {
	options: {
		sourceMap: true,
		presets: ['es2015']
	},
	dist: {
		files: {
			'js/main.js': 'js/index.js'
		}
	}
}
