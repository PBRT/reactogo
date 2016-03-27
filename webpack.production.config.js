// Libraires
var Webpack = require('webpack');

// Configuration
var config = Object.assign({}, require('./webpack.config.js'));

config.plugins = Array.prototype.concat(
  config.plugins, [
    new Webpack.optimize.DedupePlugin(),
    new Webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
  ]
);

// Block the build if lint errors
config.eslint = {failOnError: true};

module.exports = config;

