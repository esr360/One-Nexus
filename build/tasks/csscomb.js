/**
 * Individual csscomb tasks
 * @see https://www.npmjs.com/package/grunt-csscomb
 */
module.exports = function(config) {
    return {
        options: {
            config: '.csscomb.json'
        },
        dist: {
            expand: true,
            cwd: config.project.dist[0],
            src: ['**/*.css', '!**/*.min.css'],
            dest: config.project.dist[0],
            ext: '.css'
        }
    }
}