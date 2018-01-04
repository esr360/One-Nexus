/**
 * Individual browserSync tasks
 * @see https://github.com/BrowserSync/grunt-browser-sync
 */
module.exports = function(config) {

    const webpack = require('webpack');
    const bundler = webpack(config.webpackConfig || require('../../webpack.config.js'));

    return {
        bsFiles: {
            src: [
                config.project.dist[0],
                '!' + config.project.dist[0] + '**/*.js'
            ]
        },
        options: {
            server: {
                baseDir: [config.project.dist[0]],
                middleware: [
                    require('webpack-dev-middleware')(bundler, {
                        publicPath: config.project.dist.scripts,
                        stats: { colors: true }
                    }),
                    require('webpack-hot-middleware')(bundler)
                ]
            },
            open: false,
            watchTask: true,
            notify: false
        }
    }
}