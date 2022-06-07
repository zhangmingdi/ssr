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

  plugins: [  // 配置webpack
    new webpack.DefinePlugin({
      '__isServer': false,   // 服务端设置true，客户端设置false
    }),
  ]
});
