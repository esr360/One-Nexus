import * as UI from '../../../ui';
import defaults from './alert.json';

/**
 * Alert
 * 
 * @param {Object} custom
 */
export default function alert(custom) {
    UI.Synergy(custom.name || defaults.alert.name, (alert, options) => {
        let close;

        alert.component('icon').forEach(icon => {
            if (icon.modifier('close') === true) close = icon;
        });

        if (close) close.addEventListener('click', () => dismiss(alert), false);

        exports.dismiss = (alert = alert) => dismiss(alert);
    }, defaults, custom, UI.evalConfig);

    UI.config.alert = UI.parse(defaults.alert, custom);

    return exports;
}

/**
 * Dissmiss an alert
 * 
 * @param {*} alert 
 */
export function dismiss(alert) {
    if (typeof alert === 'object' && ('target' in alert)) {
        alert = alert.target.closest('[data-module]');
    }

    alert.classList.add('hidden');
}