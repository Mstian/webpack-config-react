const ora = require('ora')
const webpack = require('webpack');
const webpackConfig = require('./webpack.prod.js');
const spinner = ora('building for production...')
spinner.start()
webpack(webpackConfig, (err, stats) => {
    spinner.stop()
})