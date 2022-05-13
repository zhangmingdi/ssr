const WebpackNodeExternals = require('webpack-node-externals');
const path = require('path');
const { merge } = require('webpack-merge');
const base = require('./webpack.base');

module.exports = merge(base, {
  mode: 'development',
  target: 'node',
  entry: path.join(__dirname, '../src/server/index.js'),
  output: {
    filename: 'index.js',
    path: path.join(__dirname, '../dist/server'),
  },
  externals: [WebpackNodeExternals()], // 排除不需要的打包模块
});
