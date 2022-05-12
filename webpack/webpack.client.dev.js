const WebpackNodeExternals = require('webpack-node-externals')
const path = require('path');
const { merge } = require('webpack-merge');
const base = require('./webpack.base');


module.exports = merge(base, {
    mode: 'development',
    entry: path.join(__dirname, '../src/client/index.js'),
    output: {
        filename: 'index.js',
        path: path.join(__dirname, '../dist/client')
    },
})