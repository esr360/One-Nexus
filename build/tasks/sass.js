/**
 * Individual sass tasks
 * @see https://github.com/sindresorhus/grunt-contrib-sass
 */
module.exports = function(config) {
    return {
        dev: {
            options: {
                style: 'expanded',
                require: 'sass-json-vars'
            },
            files: {
                [config.project.dist[1].theme + config.dist + '.css']: 
                config.project.source[1].theme + '<%=theme%>.scss'
            }
        },
        prod: {
            options: {
                style: 'compressed',
                require: 'sass-json-vars',
                sourcemap: 'none'
            },
            files: {
                [config.project.dist[1].theme + config.dist + '.min.css']: 
                config.project.source[1].theme + '<%=theme%>.scss'
            }
        }
    }
}