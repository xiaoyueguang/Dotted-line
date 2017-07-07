// Karma configuration
// Generated on Thu Jun 22 2017 12:26:32 GMT+0800 (CST)

var webpackConfig = require('./webpack.config')()
delete webpackConfig.devtool
delete webpackConfig.entry
delete webpackConfig.output

module.exports = function(config) {
  config.set({
    frameworks: ['mocha'],
    files: [
      // '../test/**/*.js',
      '../src/**/*.js',
      './app.js'
    ],

    preprocessors: {
      // '../test/**/*.js': ['webpack', 'coverage'],
      '../src/**/*.js': ['webpack', 'coverage'],
      './app.js': ['webpack', 'coverage']
    },

    plugins: [
      'karma-coverage',
      'karma-mocha',
      'karma-chrome-launcher',
      // 'karma-babel-preprocessor',
      'karma-webpack'
    ],

    reporters: ['progress', 'coverage'],

    coverageReporter: {
      type : 'html',
      dir : '../coverage/'
    },
    singleRun: true,
    browsers: ['Chrome'],
    // webpack: webpackConfig
  })
}
