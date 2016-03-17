var Webpack = require('webpack');
var devConfiguration = Object.assign({}, require('./webpack.config.js'));

devConfiguration.module.loaders
  .filter(item => item.id === 'jsx')
  .map(item => item.loaders.unshift('react-hot'));

devConfiguration.plugins.push(
  new Webpack.HotModuleReplacementPlugin()
);

module.exports = devConfiguration;
