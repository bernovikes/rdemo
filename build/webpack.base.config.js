const webpack = require('webpack')
const config = require('../config')
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

const WebpackConfig = {
    context: path.resolve(__dirname, '../'),
    entry: {
        app: './src/main.js'
    },
    output:{
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    devServer: {
        clientLogLevel: 'warning',
        hot: true,
        compress: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('node_modules/webpack-dev-server/client')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            },
        ]
    }
}
module.exports = WebpackConfig
