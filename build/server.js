require('@babel/register')();

var webpackDevServer = require('webpack-dev-server');
var webpackConfig = require('../webpack.config.babel').default();
var webpack = require('webpack');
var deepExtend = require('deep-extend');

var compiler = webpack(webpackConfig);

// compiler.plugin('compile', () => {
//     const APP = requireUncached('../src/app.json').app;
//     const FOUNDATION = requireUncached('../src/ui/foundation');
//     const THEME = requireUncached(`../src/ui/themes/${app.options.THEME_NAME}`).default;

//     // global.Synergy = {
//     //     THEME: deepExtend({ ...foundation }, theme({ ...foundation }), app.theme)
//     // }

//     global.Synergy = { APP, FOUNDATION, THEME }
// });

new webpackDevServer(compiler, {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    contentBase: './dist',
    historyApiFallback: true
}).listen(3000, 'localhost', function(error, result) {
    if (error) {
        return console.log(error);
    }

    console.log('Listening at http://localhost:3000/');
});

function requireUncached(module){
    delete require.cache[require.resolve(module)];
    return require(module);
}