/**
 * Individual notify tasks
 * @see https://github.com/dylang/grunt-notify
 */
module.exports = function(config) {
    return {
        scripts: {
            options: {
                title: 'Scripts Compiled',
                message: 'All scripts have been successfully compiled!'
            }
        },
        css: {
            options: {
                title: 'Styles Compiled',
                message: 'All styles have been successfully compiled!'
            }
        },
        images: {
            options: {
                title: 'Images Copied',
                message: 'All images have been copied to the distribution directory'
            }
        },
        views: {
            options: {
                title: 'Views Compiled',
                message: 'All views have been successfully compiled!'
            }
        },
        dist: {
            options: {
                title: 'App Built',
                message: 'Your app has been successfully built!'
            }
        }
    }
}