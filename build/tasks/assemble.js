/**
 * Individual assemble tasks
 * @see https://github.com/assemble/grunt-assemble
 */
module.exports = function(config) {
    return {
        options: {
            layout: 'base.hbs',
            layoutdir: config.project.source[1].templates + 'layouts/',
            partials: config.project.source[1].templates + 'partials/**/*.hbs',
            helpers: [config.project.source[1].templates + 'helpers/**/*.js']
        },
        dist: {
            cwd: config.project.source[1].templates + 'pages/',
            dest: config.project.dist[1].templates,
            expand: true,
            src: '**/*.hbs',
            options: {
                assets: './' + config.project.dist[0],
                environment: config.env,
                theme: theme,
                dest: '<%=assemble.dist.dest%>'
            }
        }
    }
}