// base 
const {resolve} = require('path');
const {PROJECT_PATH, IS_DEV} = require('./config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const WebpackBar = require('webpackbar');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const getCssLoaders = () => {
    return [
        IS_DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                sourceMap: IS_DEV,
            }
        },
        {
            loader: 'postcss-loader',
            options: {
                ident: 'postcss',
                plugins: [
                    require('postcss-flexbugs-fixes'),
                    require('postcss-preset-env')({
                        autoprefixer:{
                            grid: true,
                            flexbox: 'no-2009'
                        },
                        stage: 3
                    }),
                    require('postcss-normalize')
                ],
                sourceMap: IS_DEV
            }
        }
    ]
}
module.exports = {
    entry: {
        app: resolve(PROJECT_PATH, './src/index.tsx')
    },
    output: {
        filename: `js/[name]${IS_DEV ? '' :'.[hash:8]'}.js`,
        path: resolve(PROJECT_PATH, './dist')
    },
    module: {
        rules: [
            {
                test: /\.(tsx|js)$/,
                loader: 'babel-loader',
                options: {cacheDirectory: true},
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: getCssLoaders(),
            },
            {
                test: /\.less$/,
                use: [
                    ... getCssLoaders(),
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: IS_DEV
                        }
                    }
                ]
            },
            {
               test: /\.scss$/,
               use: [
                   ...getCssLoaders(),
                   {
                       loader: 'sass-loader',
                       options: {
                           sourceMap: IS_DEV
                       }
                   }
               ] 
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10 * 1024,
                            name: '[name].[contenthash:8].[ext]',
                            outputPath: 'images'
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|woff|woff2|eot|otf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name].[contenthash:8].[ext]',
                            outputPath: 'fonts'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(PROJECT_PATH, './public/index.html'),
            filename: 'index.html',
            cache: false,
            minify: IS_DEV ? false : {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true,
                collapseBooleanAttributes: true,
                collapseInlineTagWhitespace: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                minifyCSS: true,
                minifyJS: true,
                minifyURLs: true,
                useShortDoctype: true,
            }
        }),
        new CopyPlugin({ // 拷贝静态资源
            patterns: [
                {
                    context: resolve(PROJECT_PATH, './public'),
                    from: '*',
                    to: resolve(PROJECT_PATH, './dist'),
                    toType: 'dir'
                },
                {
                    context: resolve(PROJECT_PATH, './public/static'),
                    from: '*',
                    to: resolve(PROJECT_PATH, './dist/static'),
                    toType: 'dir'
                }
            ]
        }),
        new WebpackBar({ // 显示启动进度
            name: IS_DEV ? '正在启动' : '正在打包'
        }),
        new ForkTsCheckerWebpackPlugin(), // 编译时typescript类型检查
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
            'Src': resolve(PROJECT_PATH, './src'),
            'Components': resolve(PROJECT_PATH, './src/components'),
            'Containers': resolve(PROJECT_PATH, './src/containers')
        }
    },
    devtool: IS_DEV ? 'cheap-module-eval-source-map' : 'cheap-module-source-map'
}