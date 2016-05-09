module.exports = function (config) {
  config.set({
    browsers: [
      'Chrome'
    ],
    // karma only needs to know about the test bundle
    files: [
      'tests.webpack.js'
    ],
    frameworks: [
      'mocha',
      'chai'
    ],
    plugins: [
      'karma-chrome-launcher',
      'karma-mocha',
      'karma-chai',
      'karma-sourcemap-loader',
      'karma-webpack',
    ],
    // run the bundle through the webpack and sourcemap plugins
    preprocessors: {
      'tests.webpack.js': [
        'webpack',
        'sourcemap'
      ]
    },
    reporters: [
      'dots'
    ],
    singleRun: true,
    // webpack config object
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
          }
        ]
      }
    },
    webpackMiddleware: {
      noInfo: true
    }
  });
};
