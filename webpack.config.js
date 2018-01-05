const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = env => {

    // Are we coming from `webpack-dev-server` command ?
    const isDevServer = !env || env && !env.build;

    // Define default loaders
    let loaders = [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
            'babel-loader',
            'eslint-loader'
        ]
    }];

    // Only use Sass loaders when running webpack-dev-server
    // Regular node-sass is used for production builds
    if (isDevServer) {
        loaders.push({
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
        });
    }

    // Define default plugins
    let plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(isDevServer ? 'development' : 'production')
            }
        }),
        new CopyWebpackPlugin([
            { from: 'src/ui/images', to: '../images' },
            { from: 'src/index.html', to: '../../'}
        ]),
        new StyleLintPlugin({
            context: 'src/ui/',
            configFile: './stylelint.config.js'
        })
    ];

    // Push appropriate dev-server plugins
    if (isDevServer) {
        plugins.push(
            new WriteFilePlugin(),
            new webpack.HotModuleReplacementPlugin()
        )
    }

    return {
        entry: {
            app: './src/app.js'
        },

        output: {
            path: path.resolve(__dirname, 'dist/assets/scripts'),
            filename: 'app.js',
            publicPath: '/'
        },

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

        devtool: 'source-map'
    }
};