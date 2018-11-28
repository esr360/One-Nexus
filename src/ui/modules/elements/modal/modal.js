import deepextend from 'deep-extend';

export default {
    toggle,
    // init
}

/**
 * Show/Hide a Modal
 */
export function toggle(target, state, config) {
    const options = config || Modal.config;

    console.log(options.overlay.element());

    const overlay_element = sQuery(options.overlay.module).query;

    // determine state
    if (!state) state = (target.modifier('visible') === true) ? 'hide' : 'show';

    // setup overlay as modal close trigger
    if (options.overlay.clickToClose) {
        sQuery([overlay_element, options.name]).component('close', 'add');
    }

    if (state === 'show') {
        // close any other currently openened modals
        document.querySelectorAll(`[data-module='${options.name}']`).forEach(modal => {
            if (modal !== target) {
                toggle(modal, 'hide', options);
            }
        });

        // @todo add option to change to modal.component('close') to protect outside influences
        const closeTriggers = sQuery(options.name).component('close');

        closeTriggers.forEach(trigger => trigger.addEventListener('click', function handler() {
            toggle(target, 'hide', options);

            trigger.removeEventListener('click', handler);
        }, false));
    }

    // toggle the page overlay
    if (options.overlay.enabled) Overlay.toggle(overlay_element, state, 'dialog');

    // toggle the target modal
    sQuery(target).modifier('visible', (state === 'show') ? 'add' : 'remove');
}

/**
 * Initialise Modals from Data-Attributes
 * 
 * @param {NodeList} els - elements to initialise as modals
 * @param {String} namespace - name of modal module
 * @param {String} componentGlue - the glue to connect components
 */
export function init(els, namespace, componentGlue = '_') {
    els.forEach((el, index) => {
        const id = el.href ? (el.href.substr(el.href.lastIndexOf('/') + 1).replace(/^#/, '')) : `_modal_${index}`;

        if (document.getElementById(id)) return;

        const style = el.getAttribute('data-modal-style') ? '-animate-' + el.getAttribute('data-modal-style') : '';
        const content = el.getAttribute('data-modal-content');
        
        const template = [`
            <div class="${namespace}${style}" id="${id}">
                <div class="${namespace}${componentGlue}close">×</div>
                <div class="${namespace}${componentGlue}content">
                    ${content}
                </div>
            </div>
        `];

        el.setAttribute('data-modal-target', id);

        document.body.insertAdjacentHTML('beforeend', template);

        // @TODO this is deprecated
        modal(document.getElementById(id));
    });
}