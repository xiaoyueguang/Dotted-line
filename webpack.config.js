const path = require('path')

module.exports = () => {
  return {
    entry: './src/app.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.js'
    },
    devtool: 'source-map'
  }
}