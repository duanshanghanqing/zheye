const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const webpackdevconfig = require('./webpack.dev.config');

module.exports = merge(webpackdevconfig, {
    devServer: {
        contentBase: [path.join(__dirname, '..', 'public'), path.join(__dirname, '..', 'static')],
        hot: true,
        historyApiFallback: true, // 解决f5刷新界面报404问题
        open: true,
        port: 9000,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});