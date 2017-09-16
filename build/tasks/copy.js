/**
 * Individual copy tasks
 * @see https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function(config) {
    return {
        appStyles: {
            files: [{
                src: [config.styles],
                dest: config.project.dist[1].styles,
                expand: true,
                flatten: true
            }]
        },

        appScripts: {
            files: [{
                src: [config.scripts],
                dest: config.project.dist[1].scripts,
                expand: true,
                flatten: true
            }]
        },

        appImages: {
            files: [
                {
                    cwd: config.project.source[1].images,
                    src: '**/*',
                    dest: config.project.dist[1].images,
                    expand: true
                },
                {
                    cwd: config.project.vendor + 'LivIconsEvo/svg',
                    src: '**/*.svg',
                    dest: config.project.dist[1].images + 'LivIcons/',
                    expand: true
                }
            ]
        }
    }
}