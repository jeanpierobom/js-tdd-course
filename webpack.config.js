const webpack = require('webpack');
const nodeENV = process.env.nodeENV || 'production';

module.exports = {
  devtool: 'source-map',
  entry: {
    filename: './src/app.js'
  },
  output: {
    filename: './build.js'
  },
}