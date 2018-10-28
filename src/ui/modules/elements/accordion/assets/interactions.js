import defaults from './config.js';

export default {
    init, 
    toggle
}

/**
 * Initialise an HTML element as an accordion
 */
export function init(element) {
    element.getComponents('panel').forEach(panel => panel.addEventListener('click', toggle));
}

/**
 * Toggle an accordion panel
 */
export function toggle(target, parent) {
    const options = Module.config(defaults(window.theme), window.theme.accordion);  

    /**
     */

    if (typeof parent === 'string') {
        return toggle(target, document.querySelectorAll(parent));
    }

    if (parent instanceof NodeList || Array.isArray(parent)) {
        return parent.forEach(child => toggle(target, child));
    }

    if (typeof target === 'object' && ('target' in target)) {
        target = target.target.closest('[data-component="panel"]');
    }

    if (!(parent instanceof HTMLElement) && target instanceof HTMLElement) {
        parent = target.parent(options.name);
    } else {
        return console.error(`Accordion.toggle: parent accordion cannot be determined from ${parent}/${target}`);
    }

    /**
     */

    let panel;

    if (typeof target === 'string') {
        panel = parent.querySelectorAll(target);
    } else if (typeof target === 'number') {
        panel = parent.children[target - 1];
    } else if (target instanceof HTMLElement || target instanceof NodeList) {
        panel = target;
    } else if (!target) {
        panel = parent.getComponents('panel');
    }

    if (panel instanceof NodeList || panel instanceof Array) {
        return panel.forEach(panel => toggle(panel, parent));
    };

    if (!(panel instanceof HTMLElement)) {
        return console.error(`Accordion.toggle: accordion panel not found - ${panel} is not an HTMLElement`);
    }

    /**
     */

    const operator = panel.modifier('active') ? 'unset' : 'set';

    if (operator === 'set' && !parent.modifier('keep-open')) {
        parent.component('panel').forEach(el => el.modifier('active', 'unset'));
    }

    panel.modifier('active', operator);

    /**
     */

    parent.repaint && parent.repaint();

    return operator === 'set' ? true : false;
}