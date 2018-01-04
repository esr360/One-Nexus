const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {

    entry: {
        app: './src/app.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist/assets/scripts'),
        filename: 'app.js',
        publicPath: '/assets/scripts/'
    },

    devServer: {
        contentBase: './dist',
        publicPath: '/assets/scripts/',
        hot: true
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.join('src', 'index.html'),
        }),
        new CopyWebpackPlugin([
        ]),
        new StyleLintPlugin({
            context: 'src/ui/',
            configFile: './stylelint.config.js'
        })
    ],

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: 'style-loader'}, 
                    {loader: 'css-loader'}, 
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            importer: [require('node-sass-json-importer')],
                            outputStyle: 'expanded'
                        }
                    }
                ]
            }
        ]
    },

    stats: {
        colors: true
    },

    devtool: 'source-map'
};