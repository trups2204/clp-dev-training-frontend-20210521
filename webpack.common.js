const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index',

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  module: {
    rules: [
      // we use babel-loader to load our jsx and tsx files
      {
        test: /\.(ts|js)x?$/,
        use: {
          loader: 'babel-loader',
          // For the structure here see https://stackoverflow.com/questions/57044643/include-some-node-modules-directories-in-babel-7.
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'entry',
                  corejs: 3,
                  targets: {
                    ie: '11',
                  },
                },
              ],
              '@babel/preset-typescript',
              '@babel/preset-react',
            ],
            plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-object-rest-spread'],
            // specific packages contain non-es5 code (eg. not compatible with IE11). They need to be explicitly excluded and
            // then explicitly included (?) in order to be transpiled.
            exclude: /node_modules\/(?!camelcase).+/,
            include: [path.resolve('src'), path.resolve('node_modules/camelcase')],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?url=false'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ['file-loader?name=[name].[ext]'],
      },
    ],
  },
};
