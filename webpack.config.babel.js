// Core packages
import path from 'path';
import webpack from 'webpack';
// Plugins & loaders
import Autoprefixer from 'autoprefixer';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import NodeSassJsonImporter from 'node-sass-json-importer';
import StyleLintPlugin from 'stylelint-webpack-plugin';
import WriteFilePlugin from 'write-file-webpack-plugin';
import StaticSiteGenerator from './build/plugins/static-site-generator.js';

export default function(env) {

    // Is this config loaded from `webpack-dev-server` ?
    const isDevServer = path.basename(require.main.filename) === 'webpack-dev-server.js';

    // Are we building for a non-production environment?
    const isNonProd = isDevServer || env && env.build === 'development';

    // Are we building static files as opposed to a single page app?
    const staticBuild = env && env.static;

    const JsLoader = {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
            'babel-loader',
            'eslint-loader'
        ],
    };

    const SassLoader = {
        test: /\.scss$/,
        use: [
            {loader: 'style-loader'}, 
            {loader: 'css-loader'},
            {loader: 'postcss-loader', options: {
                sourceMap: true,
                plugins: () => [Autoprefixer]
            }}, 
            {loader: 'sass-loader', options: {
                sourceMap: true,
                importer: [NodeSassJsonImporter],
                outputStyle: 'expanded'
            }}
        ]
    };

    // Define default loaders
    let loaders = [ JsLoader, SassLoader ];

    // Define default plugins
    let plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(isDevServer ? 'development' : 'production'),
                APP_ENV : JSON.stringify(staticBuild ? 'node' : 'web')
            }
        }),
        new CopyWebpackPlugin([
            { from: 'src/ui/images', to: 'assets/images' }
        ]),
        new webpack.ProvidePlugin({
            React: 'react'
        }),
        new StyleLintPlugin({
            context: 'src/ui/',
            configFile: './stylelint.config.js'
        })
    ];

    if (isDevServer) {
        plugins.push(
            new WriteFilePlugin(),
            new webpack.HotModuleReplacementPlugin()
        );
    }

    if (staticBuild) {
        plugins.push(StaticSiteGenerator);
    } else {
        plugins.push(
            new HtmlWebpackPlugin({
                template: 'src/views/layouts/foo.jsx',
                inject: false
            })
        )
    }

    return {
        entry: './src/app.js',

        output: {
            path: path.resolve(__dirname, 'dist/'),
            filename: 'assets/scripts/app.js',
            publicPath: '/',
            libraryTarget: 'umd'
        },

        devServer: {
            contentBase: './dist',
            publicPath: '/',
            hot: true,
            port: 3000
        },

        plugins,

        module: { loaders },

        stats: { colors: true },

        devtool: isNonProd ? 'source-map' : false
    }
};