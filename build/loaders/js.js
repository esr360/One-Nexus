export default {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loaders: [
        'babel-loader',
        'eslint-loader'
    ],
};