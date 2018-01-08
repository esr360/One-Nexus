import path from 'path';
import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import StyleLintPlugin from 'stylelint-webpack-plugin';
import WriteFilePlugin from 'write-file-webpack-plugin';
import StaticSiteGenerator from './build/plugins/static-site-generator';
import JsLoader from './build/loaders/js';
import SassLoader from './build/loaders/sass';

export default function(env) {

    // Is this config loaded from `webpack-dev-server` ?
    const isDevServer = path.basename(require.main.filename) === 'webpack-dev-server.js';

    // Are we building for a non-production environment?
    const isNonProd = isDevServer || env && env.build === 'development';

    // Are we building static files as opposed to a single page app?
    const staticBuild = env && env.static;

    // Define default plugins
    let plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(isDevServer ? 'development' : 'production'),
                APP_ENV : JSON.stringify(staticBuild ? 'node' : 'web')
            }
        }),
        new webpack.ProvidePlugin({
            React: 'react'
        }),
        new CopyWebpackPlugin([
            { from: 'src/ui/images', to: 'assets/images' }
        ]),
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

    plugins.push(
        staticBuild ? StaticSiteGenerator : new HtmlWebpackPlugin({
            template: 'src/views/layouts/foo.jsx',
            inject: false
        })
    )

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

        module: { loaders: [ JsLoader, SassLoader ] },

        stats: { colors: true },

        devtool: isNonProd ? 'source-map' : false
    }
};