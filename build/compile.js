/**
 * Compile assets
 * 
 * @example compile({
 *     theme: 'one-nexus', 
 *     environment: 'prod',
 *     assets: ['scss'],
 *     test: false
 * });
 */
module.exports = function compile(custom) {

    const options = Object.assign({
        environment: 'dev',
        theme: 'one-nexus',
        compile: [
            'app', 
            'theme',
            'templates'
        ],
        assets: [
            'styles', 
            'scripts', 
            'images',
        ],
        lint: true,
        test: true,
        docs: true,
        notify: true
    }, custom);

    let tasks = [];

    // Compile app assets
    if (options.compile.includes('app')) {
        if (options.assets.includes('styles')) {
            if (options.environment === 'dev') {
                tasks = tasks.concat(require('./clean')({
                    environment: options.environment,
                    clean: ['app'],
                    assets: ['styles']
                }));
            }

            tasks.push('copy:styles');

            if (options.environment === 'prod') {
                tasks.push('cssmin:app');

                tasks = tasks.concat(require('./clean')({
                    environment: options.environment,
                    clean: ['app'],
                    assets: ['styles']
                }));
            }
        }

        if (options.assets.includes('scripts')) {
            if (options.environment === 'dev') {
                tasks = tasks.concat(require('./clean')({
                    environment: options.environment,
                    clean: ['app'],
                    assets: ['scripts']
                }));
            }

            tasks.push('copy:scripts');

            if (options.environment === 'prod') {
                tasks.push('uglify:app');
    
                tasks = tasks.concat(require('./clean')({
                    environment: options.environment,
                    clean: ['app'],
                    assets: ['scripts']
                }));
            }
        }

        if (options.assets.includes('images')) {
            tasks.push('copy:images');
        }
    }

    // Compile theme assets
    if (options.compile.includes('theme')) {
        tasks = tasks.concat(require('./clean')({
            environment: options.environment,
            theme: options.theme,
            clean: ['theme']
        }));

        if (options.assets.includes('styles')) {
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
                tasks.push('cssmin:theme');
            }

            tasks = tasks.concat(require('./clean')({
                environment: options.environment,
                theme: options.theme,
                clean: ['theme'],
                assets: ['styles']
            }));
        }

        if (options.assets.includes('scripts')) {
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
                tasks.push('uglify:theme');
            }

            tasks = tasks.concat(require('./clean')({
                environment: options.environment,
                theme: options.theme,
                clean: ['theme'],
                assets: ['scripts']
            }));
        }
    }

    // Compile templates
    if (options.compile.includes('templates')) {
        tasks.push('assemble');    
    }

    return tasks;
}