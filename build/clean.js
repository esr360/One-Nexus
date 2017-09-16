/**
 * Compile app/theme
 * 
 * @example clean({
 *     theme: 'one-nexus', 
 *     assets: ['scss']
 * });
 */
module.exports = function clean(custom) {

    const options = Object.assign({
        environment: 'dev',
        theme: 'one-nexus',
        clean: [
            'app', 
            'theme'
        ],
        assets: [
            'styles', 
            'scripts', 
            'images'
        ],
        nuke: false
    }, custom);

    if (options.nuke) {
        return ['clean:dist'];
    }

    const envToClean = (options.environment === 'dev') ? 'prod' : 'dev';

    let tasks = [];

    // Clean app assets
    if (options.clean.includes('app')) {
        if (options.assets.includes('styles')) {
            tasks.push(`clean:${envToClean}AppStyles`);
        }

        if (options.assets.includes('scripts')) {
            tasks.push(`clean:${envToClean}AppScripts`);
        }

        if (options.assets.includes('images')) {
            tasks.push(`clean:appImages`);
        }
    }

    // Clean theme assets
    if (options.clean.includes('theme')) {
        if (options.assets.includes('styles')) {
            tasks.push(`clean:${envToClean}ThemeStyles`);
        }

        if (options.assets.includes('scripts')) {
            tasks.push(`clean:${envToClean}ThemeScripts`);
        }
    }

    return tasks;
}