const WebpackBaseConfig = require('./webpack.base.config')
const merge = require('webpack-merge')
const config = require('../config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const devWebpackConfig = merge(WebpackBaseConfig, {
    devtool: config.dev.devtool,
    plugins: [
        new webpack.DefinePlugin({
            'process.env': require('../config/dev.env')
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
    ]
})
