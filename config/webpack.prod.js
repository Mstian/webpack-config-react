const {merge} = require('webpack-merge');
const {resolve} = require('path');
const {PROJECT_PATH} = require('./config');
const baseConfig = require('./webpack.base');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgeCSSPlugin = require('purgecss-webpack-plugin');
const glob = require('glob');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = merge(baseConfig, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(), // 清理构建产物
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
            ignoreOrder: false
        }),
        new PurgeCSSPlugin({ // 剔除没有用到的css样式
            paths: glob.sync(`${resolve(PROJECT_PATH, './src')}/**/*.{tsx,scss,less,css}`, {nodir: true}),
            whitelist: ['html', 'body']
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserWebpackPlugin({ // js压缩
                extractComments: false,
                terserOptions: {
                    compress: {
                        pure_funcs: ['console.log']
                    }
                }
            }),
            new OptimizeCSSAssetsPlugin() // css压缩整合
        ].filter(Boolean),
        splitChunks:{ // 分包优化
            chunks: 'async',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: false,
            cacheGroups: {
              vendor: {
                name: 'vendor',
                chunks: 'initial',
                priority: -10,
                reuseExistingChunk: false,
                test: /node_modules\/(.*)\.js/
              },
              styles: {
                name: 'styles',
                test: /\.(scss|css)$/,
                chunks: 'all',
                minChunks: 1,
                reuseExistingChunk: true,
                enforce: true
              }
            }
        }
    }
})
