import Autoprefixer from 'autoprefixer';
import NodeSassJsonImporter from 'node-sass-json-importer';

export default {
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
}