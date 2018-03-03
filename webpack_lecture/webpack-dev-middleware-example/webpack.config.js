var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './apps/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:3000/dist'
  },
};