var path = require('path');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry:  './src/components/app.js',
  output: {
    path:     'builds',
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?module&importLoaders=1&localIdentName=[name]__[local]--[hash:base64:5]!postcss'
        )
      },
      {
        test: /\.js$/,
        include: '/node_modules/angular/angular.js',
        loader: 'babel'
      },
    ]
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      inject: 'body'
    }),
    new ExtractTextPlugin('styles.css')
  ]
};
