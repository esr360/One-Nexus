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
            files: [config.project.source + '**/*.scss'],
            tasks: require('../compile')({
                theme: config.theme,
                environment: config.env,
                compile: {ui: ['styles']},
                lint: config.lint,
                test: config.test,
                docs: false
            })
        },

        scripts: {
            files: [
                config.project.source + '**/*.{js,jsx}'
            ],
            tasks: require('../compile')({
                theme: config.theme,
                environment: config.env,
                compile: {ui: ['scripts']},
                lint: config.lint,
                test: config.test,
                docs: false
            })
        },

        config: {
            files: [config.project.source + '**/*.json'],
            tasks: require('../compile')({
                theme: config.theme,
                environment: config.env,
                compile: {ui: ['styles', 'scripts']},
                lint: false,
                test: config.test,
                docs: false
            })
        },

        images: {
            files: config.project.ui[1].images + '**/*',
            tasks: require('../compile')({
                compile: {ui: ['images']},
            })
        },

        views: {
            files: config.project.source + 'index.html',
            tasks: require('../compile')({
                compile: {app: ['views']},
            })
        },

        grunt: {
            files: 'Gruntfile.js',
            tasks: ['theme:' + config.theme]
        }
    }
}