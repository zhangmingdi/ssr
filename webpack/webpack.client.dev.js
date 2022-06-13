const WebpackNodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const base = require('./webpack.base');

module.exports = merge(base, {
  mode: 'development',
  entry: path.join(__dirname, '../src/client/index.js'),
  output: {
    filename: 'index.js',
    path: path.join(__dirname, '../dist/client'),
  },

  module: {
    rules: [{
      test: /\.less?$/,
      exclude: /node_modules/,
      use: ['style-loader',
        {
          loader: 'css-loader',
          options: {
            // importLoaders: 2,
            // modules: {
            //   localIdentName: '[local]--[hash:base64:5]',
            // },
            modules: true,
          },
        },
        'postcss-loader',
        'less-loader'],
    }],
  },

  plugins: [ // 配置webpack
    new webpack.DefinePlugin({
      __isServer: false, // 服务端设置true，客户端设置false
    }),
  ],
});
