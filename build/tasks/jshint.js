/**
 * Individual jshint tasks
 * @see https://github.com/gruntjs/grunt-contrib-jshint
 */
module.exports = function(config) {
    return {
        options: {
            esversion: 6
        },
        source: [config.project.source + '**/*.js']
    }
}