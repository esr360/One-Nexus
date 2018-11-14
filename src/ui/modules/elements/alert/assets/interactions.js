import defaults from './config.js';

export default {
    init, 
    dismiss
}

/**
 * Initialise an HTML element as an alert
 */
export function init(element) {
    if (element.getComponent('dismiss')) {
        element.getComponent('dismiss').addEventListener('click', dismiss);
    }
}

/**
 * Dissmiss an alert
 */
export function dismiss(alert) {
    const options = Object.assign(defaults(window.theme), window.theme.alert);

    if (typeof alert === 'object' && ('target' in alert)) {
        alert = alert.target.closest(`[data-module="${options.name}"]`);
    }

    alert.modifier('hidden', 'set')
    
    alert.repaint && alert.repaint();
}