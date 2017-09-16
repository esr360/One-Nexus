/**
 * Individual jsdoc tasks
 * @see https://github.com/SassDoc/grunt-sassdoc
 */
module.exports = function(config) {
    return {
        dist : {
            src: [
                'Gruntfile.js', 
                config.project.source[0] + '**/*.js'
            ],
            options: {
                destination: config.project.docs[1].scripts
            }
        }
    }
}