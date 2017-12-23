/**
 * Individual clean tasks
 * @see https://github.com/gruntjs/grunt-contrib-clean
 */
module.exports = function(config) {
    return {
        dist: {
            src: config.project.dist[0]
        },

        images: {
            src: config.project.dist[1].images
        },

        devStyles: [
            config.project.dist[1].styles + '**/*.css', '!' + config.project.dist[1].styles + '**/*.min.css'
        ],

        devScripts: [
            config.project.dist[1].scripts + '**/*.js', '!' + config.project.dist[1].scripts + '**/*.min.js'
        ],

        prodStyles: [
            config.project.dist[1].styles + '**/*.min.css'
        ],

        prodScripts: [
            config.project.dist[1].scripts + '**/*.min.js'
        ],
    }
}