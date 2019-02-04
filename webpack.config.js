const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        index: './src/js/index.js',
    },
    output: {
        filename: '[name].[chunkhash].bundle.js',
        chunkFilename: '[name].[chunkhash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        // you can specify a publicPath here
                        // by default it use publicPath in webpackOptions.output
                        publicPath: '../'
                    }
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.woff(2)?(\?[a-z0-9]+)?$/,
                use: [{
                    loader: "url-loader?limit=10000&mimetype=application/font-woff"
                }]
            },
            {
                test: /\.(ttf|eot|svg)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: "file-loader"
                }]
            },
            {
                test: /\.(js)$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader',
                use: [{
                    loader: 'babel-loader',
                    //如果有这个设置则不用在添加.babelrc
                    options: {
                        plugins: ['@babel/plugin-syntax-dynamic-import']
                    }
                }]
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].[chunkhash].css",
            chunkFilename: "[id].css"
        }),
        new webpack.HashedModuleIdsPlugin(),
        new HtmlWebpackPlugin({
            title: 'Weibo'
        }),
        new CleanWebpackPlugin(['dist']),
        // new WorkboxPlugin.GenerateSW({
        //     // 这些选项帮助 ServiceWorkers 快速启用
        //     // 不允许遗留任何“旧的” ServiceWorkers
        //     clientsClaim: true,
        //     skipWaiting: true
        // })
    ],
};