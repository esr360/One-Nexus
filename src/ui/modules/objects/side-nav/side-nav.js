import defaults from './side-nav.json';

export default {
    init, toggle
}

export function init(navigation) {
    const options = Object.assign(defaults['side-nav'], window.theme['side-nav']);

    sQuery(options.name, el => {
        // populate the side-navigation
        if (typeof navigation === 'string') {
            el.querySelector('nav').innerHTML = sQuery(navigation).query[0].innerHTML;
        }

        // toggle side nav on component click
        sQuery(options.name).component('toggle').forEach(toggleElement => {
            // console.log(toggleElement)
            toggleElement.addEventListener('click', () => toggle(el, 'toggle', options));
        });

        // close side nav on component click
        [...sQuery(options.name).component('close')].forEach(closeElement => {
            console.log(closeElement); // @TODO check that this outputs something
            closeElement.addEventListener('click', () => toggle(el, 'hide', options));
        });

        // insert dropdown toggle element where appropriate
        el.querySelectorAll('li ul').forEach(dropdown => {
            dropdown.parentNode.insertBefore(sideNavDropdownIcon(options), dropdown);
            // set default collapse of dropdowns
            if (!options.collapsible['open-by-default']) {
                dropdown.classList.add('collapsed');
            }
        });

        // toggle dropdown on element click
        el.component('dropdown_toggle').forEach(toggle => {
            toggle.addEventListener('click', () => {
                toggle.nextSibling.classList.toggle('collapsed');
            });
        });
    });
}

/**
 * Show/Hide the Side Navigation
 * 
 * @param {HTMLElement} el - the side-nav HTML element 
 * @param {('show'|'hide')} operator - the type of toggle to activate
 * @param {Object} options - the module options to use
 */
export function toggle(el, operator, options) {
    const state = (el.modifier('visible') || operator === 'hide') ? 'unset' : 'set';
    const overlay_element = overlay.element(options.overlay);

    el.modifier('visible', state);

    if (options.overlay) {
        overlay.toggle(overlay_element, operator, 'overlaySideNav');

        if (state === 'set') {
            overlay_element.addEventListener('click', function handler() {
                toggle(el, 'hide', options);

                overlay_element.removeEventListener('click', handler);
            }, false);
        }
    }
}

/**
 * Create Dropdown Toggle Icon
 * 
 * @access private
 * 
 * @param {Object} options - the module options to use
 */
function sideNavDropdownIcon(options) {
    const toggle = document.createElement('div');
    const icon = document.createElement('i');

    toggle.classList.add(`${options.name}_dropdown_toggle`);
    icon.classList.add('fa', options.collapsible.icon);

    toggle.appendChild(icon);

    return toggle;  
}