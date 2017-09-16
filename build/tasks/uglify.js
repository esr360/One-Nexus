/**
 * Individual uglify tasks
 * @see https://github.com/gruntjs/grunt-contrib-uglify
 */
module.exports = function(config) {
    return {
        options: {
            compress: {
                drop_console: true
            }
        },

        app: {
            files: [{ 
                src: [
                    config.project.dist[1].scripts + '*.js',
                    '!' + config.project.dist[1].scripts + '*.min.js'
                ],
                dest: config.project.dist[1].scripts,
                expand: true,
                flatten: true,
                rename: (dest, src) => { 
                    return dest + '/' + src.replace('.js', '.min.js'); 
                }
            }]
        },

        theme: {
            files: [{ 
                src: [
                    config.project.dist[1].theme + '**/*.js',
                    '!' + config.project.dist[1].theme + '**/*min.js',
                ],
                dest: config.project.dist[1].theme,
                expand: true,
                flatten: true,
                rename: (dest, src) => { 
                    return dest + '/' + src.replace('.js', '.min.js'); 
                }
            }]
        }
    }
}