const merge = require('webpack-merge');
const webpack = require('webpack');

const common = require('./webpack.common.js');

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',

  devtool: 'source-map',

  devServer: {
    historyApiFallback: true,
  },
  // and output it into /dist as bundle.js
  output: {
    path: path.join(__dirname, './server/public'),
    filename: 'bundle.js',
    publicPath: '/public',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  watch: true,
});
