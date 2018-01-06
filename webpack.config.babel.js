const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const jsdom  = require('jsdom-global')();

import { Module, Component } from '../../Synergy/src/js/synergy';

module.exports = env => {

    // Are we coming from `webpack-dev-server` command ?
    const isDevServer = !env || env && !env.build;

    // Are we building for a development environment?
    const isDevEnv = isDevServer || env && env.build === 'development';

    // Are we building static files (as opposed to a react app)?
    const staticBuild = env && env.static;

    // Define default loaders
    let loaders = [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loaders: [
                'babel-loader',
                'eslint-loader'
            ],
        },
        {
            test: /\.scss$/,
            use: [
                {loader: 'style-loader'}, 
                {loader: 'css-loader'},
                {loader: 'postcss-loader', options: {
                    sourceMap: true,
                    plugins: () => [require('autoprefixer')]
                }}, 
                {loader: 'sass-loader', options: {
                    sourceMap: true,
                    importer: [require('node-sass-json-importer')],
                    outputStyle: 'expanded'
                }}
            ]
        }
    ];

    // Define default plugins
    let plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(isDevServer ? 'development' : 'production'),
                APP_ENV: JSON.stringify(staticBuild ? 'node' : 'web')
            }
        }),
        new CopyWebpackPlugin([
            { from: 'src/ui/images', to: 'assets/images' }
        ]),
        new webpack.ProvidePlugin({
            'React': 'react'
        }),
        new StyleLintPlugin({
            context: 'src/ui/',
            configFile: './stylelint.config.js'
        })
    ];

    if (staticBuild) {
        plugins.push(
            new StaticSiteGeneratorPlugin({
                crawl: true,
                globals: {
                    window: window,
                    document: document,
                    React: require('react'),
                    ReactDOM: require('react-dom'),
                    Module,
                    Component
                }
            })
        );
    } else {
        plugins.push(
            new WriteFilePlugin(),
            new webpack.HotModuleReplacementPlugin()
        );
    }

    return {
        entry: {
            app: './src/app.js'
        },

        output: {
            path: path.resolve(__dirname, 'dist/'),
            filename: 'assets/scripts/app.js',
            publicPath: '/',
            libraryTarget: 'umd'
        },

        target: 'web',

        devServer: {
            contentBase: './dist',
            publicPath: '/',
            hot: true,
            port: 3000
        },

        plugins,

        module: {
            loaders
        },

        stats: {
            colors: true
        },

        devtool: isDevEnv ? 'source-map' : false
    }
};