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
            tasks: require('../build')({
                theme: config.theme,
                environment: config.env,
                compile: ['styles'],
                assets: false,
                lint: config.lint,
                test: config.test,
                docs: false
            })
        },

        // Since moving from Browserify to Webpack, we no longer
        // need to watch the JS files. @TODO - remove the below
        // scripts: {
        //     files: [config.project.source + '**/*.{js,jsx}'],
        //     tasks: require('../build')({
        //         theme: config.theme,
        //         environment: config.env,
        //         compile: ['scripts'],
        //         assets: false,
        //         lint: config.lint,
        //         test: config.test,
        //         docs: false
        //     })
        // },

        images: {
            files: config.project.ui[1].images + '**/*',
            tasks: require('../build')({
                compile: ['images'],
                assets: false
            })
        },

        views: {
            files: config.project.source + 'index.html',
            tasks: require('../build')({
                compile: ['views'],
                assets: false
            })
        },

        config: {
            files: [config.project.source + '**/*.json'],
            tasks: require('../build')({
                theme: config.theme,
                environment: config.env,
                compile: ['styles'],
                assets: false,
                lint: false,
                test: config.test,
                docs: false
            })
        }
    }
}