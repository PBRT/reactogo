var _ = require('underscore');
var Webpack = require('webpack');
var config = _.clone(require('./webpack.config.js'));

config.plugins = Array.prototype.concat(
  config.plugins, [
    new Webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false},
    }),
    new Webpack.optimize.DedupePlugin()]
);

module.exports = config;

