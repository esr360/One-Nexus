export default {
    test: /\.(js|jsx|jss)$/,
    exclude: /node_modules/,
    loaders: [
        'babel-loader',
        //'eslint-loader'
    ]
};