var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    main: './apps/index.js',
    vendor: [
      'moment',
      'lodash',
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}