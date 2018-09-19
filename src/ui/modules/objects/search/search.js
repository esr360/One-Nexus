import defaults from './search.json';

export default {
    toggle, init
}

export function toggle(operator) {
    const config = Object.assign(defaults.search, window.theme.search);

    sQuery(config.name, search => {
        const state = (search.modifier('visible') && operator !== 'show' || operator === 'hide') ? 'unset' : 'set';
    
        search.modifier('visible', state);
    
        if (state === 'set') {
            window.setTimeout(() => search.component('input')[0].focus(), 100);
        }
    });
}

export function init() {
    const config = Object.assign(defaults.search, window.theme.search);

    ['show', 'hide', 'toggle'].forEach(trigger => {
        [...sQuery(config.name).component(trigger)].forEach(triggerEl => {
            triggerEl.addEventListener('click', toggle.bind(this, trigger), false);
        });
    });
}