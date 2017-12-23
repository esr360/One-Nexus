/**
 * Individual postcss tasks
 * @see https://github.com/nDmitry/grunt-postcss
 */
module.exports = function(config) {
    return {
        options: {
            map: false,
            processors: [
                require('autoprefixer') ({
                    browsers: [
                        'last 2 versions', 
                        'ie >= 9'
                    ]
                })
            ]
        },
        dist: {
            src: [config.project.dist[1].styles + '**/*.css']
        }
    }
}