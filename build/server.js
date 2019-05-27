require('@babel/register')();

var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config.babel').default();
var webpack = require('webpack');
var deepExtend = require('deep-extend');

var compiler = webpack(config);

compiler.plugin('compile', () => {
    var app = requireUncached('../src/app.json').app;
    var foundation = requireUncached('../src/ui/foundation');
    const theme = requireUncached(`../src/ui/themes/${app.options.THEME_NAME}`).default;

    // global.Synergy = {
    //     THEME: deepExtend({ ...foundation }, theme({ ...foundation }), app.theme)
    // }

    global.Synergy = {
        APP: app,
        FOUNDATION: foundation,
        THEME: theme
    }
});

new WebpackDevServer(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
    contentBase: './dist',
    historyApiFallback: true
}).listen(3000, 'localhost', function(err, result) {
    if (err) {
        return console.log(err);
    }

    console.log('Listening at http://localhost:3000/');
});

function requireUncached(module){
    delete require.cache[require.resolve(module)];
    return require(module);
}