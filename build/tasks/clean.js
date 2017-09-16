/**
 * Individual clean tasks
 * @see https://github.com/gruntjs/grunt-contrib-clean
 */
module.exports = function(config) {
    return {
        dist: {
            src: config.project.dist[0]
        },

        appImages: {
            src: config.project.dist[1].images
        },

        devAppStyles: [
            config.project.dist[1].styles + '**/*.css',
            '!' + config.project.dist[1].styles + '**/*.min.css'
        ],

        devAppScripts: [
            config.project.dist[1].scripts + '**/*.js',
            '!' + config.project.dist[1].scripts + '**/*.min.js'
        ],

        prodAppStyles: [
            config.project.dist[1].styles + '**/*.min.css'
        ],

        prodAppScripts: [
            config.project.dist[1].scripts + '**/*.min.js'
        ],

        devThemeStyles: [
            config.project.dist[1].theme + config.dist + '.css',
            config.project.dist[1].theme + '*.css.map'
        ],

        devThemeScripts: [
            config.project.dist[1].theme + config.dist + '.js'
        ],

        prodThemeStyles: [
            config.project.dist[1].theme + config.dist + '.min.css'
        ],

        prodThemeScripts: [
            config.project.dist[1].theme + config.dist + '.min.js'
        ]
    }
}