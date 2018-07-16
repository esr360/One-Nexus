import defaults from './side-nav.json';

export default {
    init
}

export function init(navigation) {
    const options = Object.assign(defaults['side-nav'], window.theme['side-nav']);

    Synergy(options.name, el => {
        // populate the side-navigation
        if (navigation) {
            el.querySelector('nav').innerHTML = Synergy(navigation).query[0].innerHTML;
        }

        // toggle side nav on component click
        Synergy(options.name).component('toggle').forEach(toggle => {
            toggle.addEventListener('click', () => exports.toggle());
        });

        // close side nav on component click
        Array.prototype.forEach.call(Synergy(options.name).component('close'), close => {
            close.addEventListener('click', () => exports.hide());
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
export function toggleSideNav(el, operator, options) {
    // determine toggle state
    const state = (el.modifier('visible') || operator === 'hide') ? 'unset' : 'set';
    const listener = (state === 'set') ? 'addEventListener' : 'removeEventListener';

    // toggle sidenav
    el.modifier('visible', state);

    // toggle overlay
    // if (options.overlay) {
    //     overlay(options.overlay).toggle('overlaySideNav');
    //     // toggle event handler to hide side-nav on overlay click
    //     Synergy(options.overlay).query[0][listener]('click', exports.hide);
    // }
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