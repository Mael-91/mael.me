const {merge} = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
    mode: "development",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "app.js",
        publicPath: "/dist/",
    },
    devServer: {
        inline: true,
        port: 8080
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
                                localIdentName: '[path][name]__[local]-[hash:base64:5]',
                                localIdentContext: path.resolve(__dirname, 'src/assets/css'),
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'assets/images',
                    name: '[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].css'
        }),
    ]
})
