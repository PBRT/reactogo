// External libs
var Webpack = require('webpack');
var path = require('path');

// Put React as a global variable
var providePlugin = new Webpack.ProvidePlugin({
  'React': 'react',
  $: 'jquery',
  'window.$': 'jquery',
  'window.jQuery': 'jquery',
  'jQuery': 'jquery',
  '_': 'underscore',
  UI: '!stylus-export-loader!' + path.resolve(__dirname, './client/style/variables.styl'),
});

var config = {

  entry: ['./client/app.jsx'],
  output: {
    path: path.resolve(__dirname, 'dist', 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', exclude: /(node_modules)/},
      { test: /\.js?$/, loader: 'babel', exclude: /(node_modules)/ },
      { test: /\.jsx?$/, loader: 'eslint-loader', exclude: /node_modules/},
      { test: /\.(png|jpg|svg)?$/, loader: 'file-loader', exclude: /node_modules/},
      { test: /\.otf$/, loader: 'file-loader', exclude: /node_modules/},
      { test: /\.(styl|css)$/, loader: 'style-loader!css-loader!stylus-loader' , exclude: /(node_modules)/},
    ]
  },
  plugins: [
    providePlugin,
  ],
  resolve: {
    modulesDirectories: [
      'node_modules/',
      'utils/',
      'components/',
    ],
  },
};

module.exports = config;
