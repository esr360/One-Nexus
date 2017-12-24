/**
 * Clean app
 * 
 * @example clean({
 *     clean: ['styles']
 * });
 */
module.exports = function clean(custom) {

    const options = Object.assign({
        environment: 'dev',
        clean: [
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
    if (options.clean.includes('styles')) {
        tasks.push(`clean:${envToClean}Styles`);
    }

    if (options.clean.includes('scripts')) {
        tasks.push(`clean:${envToClean}Scripts`);
    }

    if (options.clean.includes('images')) {
        tasks.push(`clean:images`);
    }

    return tasks;
}