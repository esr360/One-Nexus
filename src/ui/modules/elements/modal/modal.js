import * as UI from '../../../ui';
import defaults from './modal.json';

/**
 * Modal
 * 
 * @param {Object} custom
 */
export default function modal(custom) {
    // determine target elements
    const TARGET = UI.getTarget('modal', defaults, custom);
    // set methods
    const methods = { toggle };

    UI.Synergy(TARGET, (modal, options) => {
        // Create any dynamic modals
        initModals(document.querySelectorAll('[data-modal-content]'), options.name);

        // setup animation modifier
        if (modal.modifier('animate') === false && options['dafault-animation']) {
            modal.modifier(`animate-${options['dafault-animation']}`, 'add');
        }

        methods.show = () => toggle(modal, 'show', options);
        methods.hide = () => toggle(modal, 'hide', options);

        methods.toggle = operator => {
            methods[(modal.modifier('visible') || operator === 'hide') ? 'hide' : 'show']();
        };

        const openTriggers = document.querySelectorAll(`[data-modal-target="${modal.id}"], [href="#${modal.id}"]`);

        openTriggers.forEach(trigger => trigger.addEventListener('click', () => {
            toggle(modal, 'show', options);
        }, false));

    }, defaults, custom, UI.evalConfig);

    UI.config.modal = UI.parse(defaults.modal, custom);

    return methods;
}

/**
 * Show/Hide a Modal
 * 
 * @access private
 * 
 * @param {(String|HTMLElement)} target - a Synergy selector to match the modal of interest
 * @param {('show'|'hide')} state - the type of toggle to activate
 * @param {Object} options - the module options to use when running the function
 * @param {HTMLElement} [overlay] - the HTML element acting as the page overlay
 */
export function toggle(target, state, options = defaults, overlay) {
    // merge passed options with window options
    options = UI.deepextend(options, UI.get().config('modal'));

    // determine overlay element
    overlay = overlay || UI.Synergy(options.overlay.module).query[0];

    // determine state
    if (!state) state = (target.modifier('visible') === true) ? 'hide' : 'show';

    // setup overlay as modal close trigger
    if (options.overlay.clickToClose) {
        UI.Synergy([overlay, options.name]).query.component('close', 'add');
    }

    if (state ==='show') {
        // close any other currently openened modals
        document.querySelectorAll(`[data-module='${options.name}']`).forEach(modal => {
            if (modal !== target) {
                toggle(modal, 'hide', options, overlay);
            }
        });

        // @todo add option to change to modal.component('close') to protect outside influences
        const closeTriggers = UI.Synergy(options.name).component('close');

        closeTriggers.forEach(trigger => trigger.addEventListener('click', function handler() {
            toggle(target, 'hide', options);

            trigger.removeEventListener('click', handler);
        }, false));
    }

    // toggle the page overlay
    if (options.overlay.enabled) UI.overlay(overlay)[state]('dialog');

    // toggle the target modal
    UI.Synergy(target).modifier('visible', (state === 'show') ? 'add' : 'remove');
}

/**
 * Initialise Modals from Data-Attributes
 * 
 * @access private
 * 
 * @param {NodeList} els - elements to initialise as modals
 * @param {String} namespace - name of modal module
 */
function initModals(els, namespace, componentGlue = UI.config.ui['component-glue']) {
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

        modal(document.getElementById(id));
    });
}