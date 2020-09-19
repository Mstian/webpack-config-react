const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.base');
const {PORT, HOST} = require('./config');
const webpack = require('webpack');
module.exports = merge(baseConfig, {
    mode: 'development',
    devServer: {
        host: HOST,
        port: PORT,
        open: true,
        hot: true,
        stats: 'errors-only', // 终端仅打印 error
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})

