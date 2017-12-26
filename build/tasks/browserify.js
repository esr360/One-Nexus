/**
 * Individual browserify tasks
 * @see https://github.com/jmreidy/grunt-browserify
 */
module.exports = function(config) {
    return {
        options: {
            watch: true,
            transform: [
                ['babelify',  {global: true, presets: ['react', 'es2015']}], 
                //['uglifyify', {global: true}]
            ]
        },
        dist: {
            src: config.project.source + config.src + '.js',
            dest: config.project.dist[1].scripts + config.dist + '.js'
        }
    }
}