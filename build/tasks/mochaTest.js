/**
 * Individual mochaTest tasks
 * @see https://github.com/pghalliday/grunt-mocha-test
 */
module.exports = function(config) {
    return {
        options: {
            reporter: 'spec'
        },
        scss: {
            src: [config.project.test[1].styles + 'tests.js']
        },
        js: {
            options: {
                require: ['babel-core/register']
            },
            src: [config.project.test[1].scripts + 'tests.js']
        }
    }
}