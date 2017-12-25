/**
 * Generate array of tasks to build app
 * 
 * @example build({
 *     environment: 'prod',
 *     compile: ['styles', 'scripts'],
 *     test: false
 * });
 */
module.exports = function build(custom) {

    const options = Object.assign({
        environment: 'dev',
        compile: ['styles', 'scripts', 'images', 'views'],
        assets: ['styles', 'scripts', 'images'],
        lint: true,
        test: true,
        docs: true,
        notify: true
    }, custom);

    let tasks = [];

    if (options.compile) {
        if (options.compile.includes('styles')) {
            if (options.lint) {
                tasks.push('scsslint');
            }

            if (options.test) {
                tasks.push('mochaTest:scss');
            }

            if (options.docs) {
                tasks.push('sassdoc');
            }

            tasks.push(
                'sass:' + options.environment,
                'postcss',
                'csscomb'
            );

            if (options.environment === 'prod') {
                tasks.push('cssmin:app');
            }

            tasks = tasks.concat(require('./clean')({
                environment: options.environment,
                clean: ['styles'],
            }));
        }

        if (options.compile.includes('scripts')) {
            if (options.lint) {
                tasks.push('jshint');
            }

            if (options.test) {
                tasks.push('mochaTest:js');
            }

            if (options.docs) {
                tasks.push('jsdoc');
            }

            tasks.push('browserify');

            if (options.environment === 'prod') {
                tasks.push('uglify:app');
            }

            tasks = tasks.concat(require('./clean')({
                environment: options.environment,
                clean: ['scripts'],
            }));
        }

        if (options.compile.includes('images')) {
            tasks.push('copy:images');
        }

        if (options.compile.includes('views')) {
            tasks.push('copy:views');
        }
    }

    if (options.assets) {
        if (options.assets.includes('styles')) {
            tasks.push('copy:styles');

            if (options.environment === 'prod') {
                tasks.push('cssmin:app');

                tasks = tasks.concat(require('./clean')({
                    environment: options.environment,
                    clean: ['styles']
                }));
            }
        }

        if (options.assets.includes('scripts')) {
            tasks.push('copy:scripts');

            if (options.environment === 'prod') {
                tasks.push('uglify:app');

                tasks = tasks.concat(require('./clean')({
                    environment: options.environment,
                    clean: ['scripts']
                }));
            }
        }
    }

    return tasks;
}