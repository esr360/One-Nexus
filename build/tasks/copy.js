/**
 * Individual copy tasks
 * @see https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function(config) {
    return {
        styles: {
            files: [{
                src: [config.styles],
                dest: config.project.dist[1].styles,
                expand: true,
                flatten: true
            }]
        },

        scripts: {
            files: [{
                src: [config.scripts],
                dest: config.project.dist[1].scripts,
                expand: true,
                flatten: true
            }]
        },

        images: {
            files: [{
                cwd: config.project.ui[1].images,
                src: '**/*',
                dest: config.project.dist[1].images,
                expand: true
            }]
        },

        views: {
            src: config.project.views + '**/*.{html,hbs}',
            dest: config.project.dist[1].views,
            expand: true,
            flatten: true
        }
    }
}