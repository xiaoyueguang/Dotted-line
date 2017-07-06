const path = require('path')
const webpack = require('webpack')

module.exports = () => {
  return {
    entry: path.resolve(__dirname, '../src/app.js'),
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: 'app.js'
    },
    devtool: 'inline-source-map',
    // module: {
    //   rules: [
    //     {
    //       test: /\.js$/,
    //       use: 'babel-loader',
    //       exclude: /node_modules/
    //     }
    //   ]
    // }
  }
}