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
export function dismiss(alert, config) {
    config = config || Alert.config;

    if (typeof alert === 'object' && ('target' in alert)) {
        alert = alert.target.closest(`[data-module="${config.name}"]`);
    }

    alert.addModifier('hidden')
    
    alert.repaint && alert.repaint();
}