var path = require('path');
var webpack = require('webpack');
var sass = require('node-sass');
 
module.exports = {
  entry: './main.js',
  output: { 
    path: __dirname + '/dist', 
    filename: 'bundle.js' 
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};