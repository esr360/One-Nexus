export default {
    toggle
}

/**
 * Show/Hide a Modal
 */
export function toggle(target, state, config = Modal.config) {
    console.log(target, state, config);

    // if (!state) state = (target.modifier('visible') === true) ? 'hide' : 'show';

    // // setup overlay as modal close trigger
    // if (config.overlay.clickToClose) {
    //     sQuery([config.overlay.element(), config.name]).component('close', 'set');
    // }

    // if (state === 'show') {
    //     document.querySelectorAll(`[data-module='${config.name}']`).forEach(modal => {
    //         if (modal !== target) {
    //             toggle(modal, 'hide', config);
    //         }
    //     });

    //     const closeTriggers = sQuery(config.name).component('close');

    //     console.log(closeTriggers);

    //     closeTriggers.forEach(trigger => trigger.addEventListener('click', function handler() {
    //         toggle(target, 'hide', config);

    //         trigger.removeEventListener('click', handler);
    //     }, false));
    // }

    // // toggle the page overlay
    // if (config.overlay.enabled) Overlay.toggle(config.overlay.element(), state, 'dialog');

    // // toggle the target modal
    // sQuery(target).modifier('visible', (state === 'show') ? 'add' : 'remove');
}