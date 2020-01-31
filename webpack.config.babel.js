import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WriteFilePlugin from 'write-file-webpack-plugin';
import StaticSiteGenerator from './build/plugins/static-site-generator';
import Autoprefixer from 'autoprefixer';
import SassJSONImporter from '../../sass-json-importer/sass-json-importer/dist/synergy-sass-importer';

/**
 * @param {*} env 
 */
export default function(env) {
  const isDevServer = path.basename(require.main.filename) === 'webpack-dev-server.js';
  // const isDevServer = path.basename(require.main.filename) === 'server.js';
  const isNonProd = isDevServer || env && env.build === 'development';
  const staticBuild = env && env.static;

  let plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        SYNERGY: true,
        // NODE_ENV: JSON.stringify(isDevServer ? 'development' : 'production'),
        // APP_ENV : JSON.stringify(staticBuild ? 'node' : 'web')
      }
    }),
  ];

  // if (isDevServer) {
  //   plugins.push(
  //     new WriteFilePlugin(),
  //     new webpack.HotModuleReplacementPlugin()
  //   );
  // }

  // plugins.push(staticBuild ? StaticSiteGenerator : new HtmlWebpackPlugin({
  //   template: 'src/views/core.jsx',
  //   inject: false
  // }));

  return {
    entry: [
      './src/entry.js',
      // './src/static.js'
    ],

    mode: env.build,
      
    resolve: {
      extensions: ['.js', '.jsx', '.json', '.jss']
    },

    output: {
      filename: 'app.js',
      // path: path.resolve(__dirname, '/'),
      // publicPath: '/',
      // libraryTarget: 'umd'
    },

    devServer: {
      // contentBase: './',
      // publicPath: '/',
      // hot: true,
      port: 3000
    },

    plugins,

    module: { 
      rules: [ 
        {
          test: /\.(js|jsx|jss)$/,
          exclude: /node_modules/,
          use: 'babel-loader'
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
              sassOptions: {
                sourceMap: true,
                importer: SassJSONImporter,
                outputStyle: 'expanded'
              }
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

    stats: { colors: true },

    devtool: isNonProd ? 'source-map' : false
  }
}