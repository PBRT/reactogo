// Libraires
var Webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

// Configuration
var config = Object.assign({}, require('./webpack.config.js'));

config.plugins = Array.prototype.concat(
  config.plugins, [
    new Webpack.optimize.DedupePlugin(),
    new Webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      { from: './server', to: '../server' },
      { from: './package.json', to: '../package.json' },
    ]),
  ]
);

module.exports = config;

