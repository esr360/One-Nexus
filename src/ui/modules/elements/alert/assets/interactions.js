import defaults from './config.js';

export default {
    dismiss
}

/**
 * Dissmiss an alert
 * 
 * @param {(Object|HTMLElement)} alert 
 */
export function dismiss(alert) {
    const options = Object.assign(defaults(window.theme), window.theme.alert);

    if (typeof alert === 'object' && ('target' in alert)) {
        alert = alert.target.closest(`[data-module="${options.name}"]`);
    }

    alert.modifier('hidden', 'add');

    alert.repaint();
}