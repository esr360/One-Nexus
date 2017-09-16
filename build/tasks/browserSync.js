/**
 * Individual browserSync tasks
 * @see https://github.com/BrowserSync/grunt-browser-sync
 */
module.exports = function(config) {
    return {
        bsFiles: {
            src: [config.project.dist[0]]
        },
        options: {
            server: ['./' + config.project.dist[0]],
            open: false,
            watchTask: true,
            notify: false
        }
    }
}