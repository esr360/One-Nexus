import defaults from './alert.json';

export default {
    dismiss
}

/**
 * Dissmiss an alert
 * 
 * @param {(Object|HTMLElement)} alert 
 */
export function dismiss(alert) {
    const options = Object.assign(defaults.alert, window.theme.alert);

    if (typeof alert === 'object' && ('target' in alert)) {
        alert = alert.target.closest(`[data-module="${options.name}"]`);
    }

    alert.classList.add('hidden');
}