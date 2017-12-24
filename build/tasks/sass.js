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
                [config.project.dist[1].styles + config.dist + '.css']: 
                config.project.source + 'app.scss'
            }
        },
        prod: {
            options: {
                style: 'compressed',
                require: 'sass-json-vars',
                sourcemap: 'none'
            },
            files: {
                [config.project.dist[1].styles + config.dist + '.min.css']: 
                config.project.source + config.src + '.scss'
            }
        }
    }
}