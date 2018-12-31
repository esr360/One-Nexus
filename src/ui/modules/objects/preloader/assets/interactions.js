import defaults from './preloader.json';

export default {
    toggle
}

export function toggle() {
    const options = Object.assign(defaults.preloader, window.theme.preloader);

    sQuery(options.name, preloader => {
        preloader.modifier('hidden', preloader.modifier('hidden', 'isset') ? 'unset' : 'set');
    });
}