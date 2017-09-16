/**
 * Individual scsslint tasks
 * @see https://github.com/ahmednuaman/grunt-scss-lint
 */
module.exports = function(config) {
    return {
        source: [config.project.source[0] + '**/*.scss'],
        options: {
            config: '.scss-lint.yml',
            colorizeOutput: false
        }
    }
}