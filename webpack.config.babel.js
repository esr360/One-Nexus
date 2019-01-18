import path from 'path';
import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WriteFilePlugin from 'write-file-webpack-plugin';
import StaticSiteGenerator from './build/plugins/static-site-generator';
import Autoprefixer from 'autoprefixer';

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
                SYNERGY: true,
                NODE_ENV: JSON.stringify(isDevServer ? 'development' : 'production'),
                APP_ENV : JSON.stringify(staticBuild ? 'node' : 'web')
            }
        }),
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom'
        }),
        new CopyWebpackPlugin([
            { from: 'src/ui/images', to: 'assets/images' }
        ])
    ];

    if (isDevServer) {
        plugins.push(
            new WriteFilePlugin(),
            new webpack.HotModuleReplacementPlugin()
        );
    }

    plugins.push(
        staticBuild ? StaticSiteGenerator : new HtmlWebpackPlugin({
            template: 'src/views/core.jsx',
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

        module: { 
            loaders: [ 
                {
                    test: /\.(js|jsx|jss)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                }, 
                {
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
                            outputStyle: 'expanded'
                        }}
                    ]
                },
                {
                    test: /\.css$/,  
                    include: /node_modules/,  
                    loaders: ['style-loader', 'css-loader']
                }
            ] 
        },
        
        resolve: {
            extensions: ['.js', '.jsx', '.json', '.jss'],
        },

        stats: { colors: true },

        devtool: isNonProd ? 'source-map' : false
    }
};