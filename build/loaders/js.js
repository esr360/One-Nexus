export default {
    test: /\.(js|jsx|jss)$/,
    exclude: /node_modules/,
    use: [
        {
            loader: 'babel-loader',
            options: {
                presets: [
                    "@babel/preset-react", 
                    "@babel/preset-env"
                ],
                plugins: [
                    "@babel/plugin-syntax-class-properties",
                    "@babel/plugin-proposal-class-properties"
                ]
            }
        }
    ],
};