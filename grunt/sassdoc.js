module.exports = {
	options: {
		display: {
			access: ['public', 'private'],
			alias: true,
			watermark: true,
		},
 	},
 	fileOnly: {
		src: 'scss/main.scss'
 	},
	css: {
		src: 'scss/**/*.scss'
	}
}
