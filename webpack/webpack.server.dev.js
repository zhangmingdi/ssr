const WebpackNodeExternals = require('webpack-node-externals')
const path = require('path');


module.exports = {
    mode: 'development',
    target: 'node',
    entry: path.join(__dirname, '../src/server/index.js'),
    output: {
        filename: 'index.js',
        path: path.join(__dirname, '../dist/server')
    },
    externals: [WebpackNodeExternals()],  //排除不需要的打包模块
    module: {
        rules: [{
            test: /.jsx?$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }]
    }
} 