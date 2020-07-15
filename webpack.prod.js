const {merge} = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = merge(common, {
    mode: "production",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].[contenthash].js",
        publicPath: "",
    },
    optimization: {
        runtimeChunk: 'single',
        minimizer: [new TerserJSPlugin(), new OptimizeCSSAssetsPlugin()],
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[hash:base64:5]',
                                context: path.resolve(__dirname, 'src/assets/css'),
                            },
                            importLoaders: 1
                        }
                    },
                    {
                        loader: "postcss-loader"
                    }
                ]
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    minimize: {
                        collapseWhiteSpace: true,
                        keepClosingSlash: true,
                        removeComments: true
                    }
                }
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'assets/images',
                    name: '[sha512:hash:base64:7].[ext]'
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].[contenthash].css'
        }),
        new WorkboxWebpackPlugin.GenerateSW(),
        new CopyPlugin({
            patterns: [
                'src/public/robot.txt'
            ]
        })
    ]
})
