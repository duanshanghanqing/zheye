const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: path.join(__dirname, '..', 'src', 'main'),
    output: {
        path: path.join(__dirname, '..', 'dist'),
        publicPath: '/', // 这里要改成相对路径。因为能使静态资源相对页面加载
        filename: 'js/bundle-[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader' // 依赖 @vue/compiler-sfc
            },
            {
                test: /\.ts$/,

                loader: 'ts-loader',

                options: {
                    appendTsSuffixTo: [/\.vue$/],
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    outputPath: 'img/',
                    name: '[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    outputPath: 'media/',
                    name: '[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    outputPath: 'font/',
                    name: '[name].[hash:7].[ext]'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json'],
        alias: {
            'vue': '@vue/runtime-dom'
        },
        alias: {
            '@': path.join(__dirname, '..', 'src'),
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.template.html'
        }),
        new VueLoaderPlugin(),
    ],
}