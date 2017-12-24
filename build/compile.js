/**
 * Compile assets
 * 
 * @example compile({
 *     environment: 'prod',
 *     compile: {ui: ['styles', 'scripts']},
 *     test: false
 * });
 */
module.exports = function compile(custom) {

    const options = Object.assign({
        environment: 'dev',
        compile: {
            ui:  ['styles', 'scripts', 'images'],
            app: ['styles', 'scripts', 'images', 'views']
        },
        lint: true,
        test: true,
        docs: true,
        notify: true
    }, custom);

    let tasks = [];

    // Create UI assets
    if ('ui' in options.compile) {
        if (options.compile.ui.includes('styles')) {
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

        if (options.compile.ui.includes('scripts')) {
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

        if (options.compile.ui.includes('images')) {
            tasks.push('copy:images');
        }
    }

    // Create other app assets
    if ('app' in options.compile) {
        if (options.compile.app.includes('styles')) {
            tasks.push('copy:styles');

            if (options.environment === 'prod') {
                tasks.push('cssmin:app');

                tasks = tasks.concat(require('./clean')({
                    environment: options.environment,
                    clean: ['styles']
                }));
            }
        }

        if (options.compile.app.includes('scripts')) {
            tasks.push('copy:scripts');

            if (options.environment === 'prod') {
                tasks.push('uglify:app');
    
                tasks = tasks.concat(require('./clean')({
                    environment: options.environment,
                    clean: ['scripts']
                }));
            }
        }

        if (options.compile.app.includes('views')) {
            tasks.push('copy:view');
        }
    }

    return tasks;
}