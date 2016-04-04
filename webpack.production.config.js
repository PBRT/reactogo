// Libraires
var webpack = require('webpack');

// Configuration
var config = Object.assign({}, require('./webpack.config.js'), {
  devtool: 'cheap-module-source-map',
});

config.plugins = Array.prototype.concat(
  config.plugins, [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: '"production"'}
    }),
  ]
);

// Block the build if lint errors
config.eslint = {failOnError: true};

module.exports = config;

