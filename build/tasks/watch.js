/**
 * Individual watch tasks
 * @see https://github.com/gruntjs/grunt-contrib-watch
 */
module.exports = function(config) {
    return {
        options: {
            spawn: false,
        },

        scss: {
            files: [config.project.source[0] + '**/*.scss'],
            tasks: require('../compile')({
                theme: config.theme,
                environment: config.env,
                compile: ['theme'],
                assets: ['styles'],
                lint: config.lint,
                test: config.test,
                docs: false
            })
        },

        scripts: {
            files: [
                config.project.source[0] + '**/*.js'
            ],
            tasks: require('../compile')({
                theme: config.theme,
                environment: config.env,
                compile: ['theme'],
                assets: ['scripts'],
                lint: config.lint,
                test: config.test,
                docs: false
            })
        },

        config: {
            files: [config.project.source[0] + '**/*.json'],
            tasks: require('../compile')({
                theme: config.theme,
                environment: config.env,
                compile: ['theme'],
                assets: ['styles', 'scripts'],
                lint: false,
                test: config.test,
                docs: false
            })
        },

        images: {
            files: config.project.source[1].images + '**/*',
            tasks: require('../compile')({
                compile: ['app'],
                assets: ['images']
            })
        },

        templates: {
            files: config.project.source[1].templates + '**/*',
            tasks: require('../compile')({
                compile: ['templates']
            })
        },

        grunt: {
            files: 'Gruntfile.js',
            tasks: ['theme:' + config.theme]
        }
    }
}