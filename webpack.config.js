var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist/assets/scripts'),
        filename: 'app.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};