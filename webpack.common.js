const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const WebpackPwaManifest = require('webpack-pwa-manifest')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.jsx',
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.html']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.svg$/i,
                use: ["svg-sprite-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/public/index.html',
        }),
        new WebpackPwaManifest({
            name: "Mael-91.io - Portfolio",
            short_name: "Mael-91.io",
            description: "Mael's Portfolio",
            theme_color: "#1B1B1B",
            background_color: "#1B1B1B",
            ios: true,
            fingerprints: false,
            icons: [
                {
                    src: path.resolve(__dirname, 'src/assets/images/icon-72x72.png'),
                    size: '72x72',
                    destination: 'assets/images'
                },
                {
                    src: path.resolve(__dirname, 'src/assets/images/icon-96x96.png'),
                    size: '96x96',
                    destination: 'assets/images'
                },
                {
                    src: path.resolve(__dirname, 'src/assets/images/icon-128x128.png'),
                    size: '128x128',
                    destination: 'assets/images'
                },
                {
                    src: path.resolve(__dirname, 'src/assets/images/icon-144x144.png'),
                    size: '144x144',
                    destination: 'assets/images'
                },
                {
                    src: path.resolve(__dirname, 'src/assets/images/icon-152x152.png'),
                    size: '152x152',
                    destination: 'assets/images'
                },
                {
                    src: path.resolve(__dirname, 'src/assets/images/icon-192x192.png'),
                    size: '192x192',
                    destination: 'assets/images'
                },
                {
                    src: path.resolve(__dirname, 'src/assets/images/icon-250x250.png'),
                    size: '250x250',
                    destination: 'assets/images'
                },
                {
                    src: path.resolve(__dirname, 'src/assets/images/icon-512x512.png'),
                    size: '512x512',
                    destination: 'assets/images'
                },
            ]
        })
    ]
}