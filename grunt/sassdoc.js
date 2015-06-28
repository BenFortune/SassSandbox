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
  main: {
    src: 'scss/**/*.scss'
  }
}
