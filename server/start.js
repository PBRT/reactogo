/* eslint-disable no-unused-vars */
var colors = require('colors');
var webpack = require('webpack');
var config = require('../webpack.config.js');
var WebpackDevServer = require('webpack-dev-server');

// handle the code updates client side
config.entry.unshift(
  'webpack-dev-server/client?http://0.0.0.0:3000'
);

var compiler = webpack(config);

// launch hermes express server
var server = require('./server.js');

var devServer = new WebpackDevServer(compiler, {
  proxy: {
    '*': 'http://localhost:' + (process.env.PORT ? process.env.PORT : '9000'),
  },
  quiet: false,
  noInfo: false,
  stats: { colors: true },
});

// launch webpack dev server TODO: maybe use an env var for the webpack-dev-server port
devServer.listen(3000, function() {
  console.log('[webpack-dev-server]'.bold.green + ' listening on port 3000'.bold);
  console.log('[webpack-dev-server]'.bold.green + ' building the app...'.bold);
});
