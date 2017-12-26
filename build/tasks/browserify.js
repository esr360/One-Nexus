/**
 * Individual browserify tasks
 * @see https://github.com/jmreidy/grunt-browserify
 */
module.exports = function(config) {
    /**
     * Set appropriate transforms
     */
    const transforms = () => {
        let transforms = [['babelify',  {global: true, presets: ['react', 'es2015']}]];

        if (config.env === 'prod') {
            transforms.push(['uglifyify', {global: true}])
        }

        return transforms
    }

    return {
        options: {
            watch: true,
            transform: transforms()
        },
        dist: {
            src: config.project.source + config.src + '.js',
            dest: config.project.dist[1].scripts + config.dist + '.js'
        }
    }
}