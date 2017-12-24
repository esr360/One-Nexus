/**
 * Individual sassdoc tasks
 * @see https://github.com/SassDoc/grunt-sassdoc
 */
module.exports = function(config) {
    return {
        dist: {
            src: [
                config.project.source + '**/*.scss'
            ],
            options: {
                dest: config.project.docs[1].styles
            }
        }
    }
}