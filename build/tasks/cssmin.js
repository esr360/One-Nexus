/**
 * Individual cssmin tasks
 * @see https://github.com/gruntjs/grunt-contrib-cssmin
 */
module.exports = function(config) {
    return {
        options: {
            processImport: false
        },

        app: {
            files: [{
                expand: true,
                cwd: config.project.dist[1].styles,
                src: ['*.css', '!*.min.css'],
                dest: config.project.dist[1].styles,
                ext: '.min.css'
            }]
        }
    }
}