const webpackConfig = require('../webpack.config.js');

module.exports = function(config) {
  config.set({
    basePath: '../',
    frameworks: ['mocha'],
    files: [
      'node_modules/phantomjs-polyfill/bind-polyfill.js',
      './node_modules/phantomjs-polyfill-object-assign/object-assign-polyfill.js',
      './tests/tests-config.js',
    ],
    preprocessors: {'./tests/tests-config.js': ['webpack']},
    webpack: {
      module: webpackConfig.module,
      resolve: webpackConfig.resolve,
      plugins: webpackConfig.plugins,
    },
    webpackMiddleware: {
      stats: {
        colors: true
      }
    },
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    captureTimeout: 60000,
    singleRun: false,
    plugins: [
      require('karma-mocha'),
      require('karma-spec-reporter'),
      require('karma-phantomjs-launcher'),
      require('karma-webpack'),
    ]
  });
};

