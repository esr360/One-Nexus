/**
 * Webpack
 * @see https://github.com/webpack-contrib/grunt-webpack
 */
module.exports = function(config) {
    return {
        options: {
            stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development',
            watch: false,
            keepalive: false
        },

        prod: Object.assign({ 
        }, config.webpackConfig),

        dev: Object.assign({ 
            watch: true 
        }, config.webpackConfig)
    }
}