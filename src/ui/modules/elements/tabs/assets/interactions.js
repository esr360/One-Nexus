export default {
    init,
    activate
}

/**
 * Initialise an HTML element as a set of tabs
 */
export function init(element) {
    element.getComponent('nav').getSubComponents('item').forEach(item => item.addEventListener('click', activate));
}


/**
 * Activate a tab pabel
 * 
 * @param {Object} event 
 */
export function activate(event, config) {
    config = config || Tabs.config;

    const container = event.target.closest(`[data-module="${config.name}"]`);
    const navItems = [...event.target.closest('[data-component="nav"]').children];
    const tabItems = container.component('item');
    const tabIndex = navItems.indexOf(event.target.hasAttribute('data-component') ? event.target : event.target.closest('[data-component]'));

    navItems.forEach(item => {
        if (navItems.indexOf(item) === tabIndex) {
            // item.modifier('active', 'add');
        } else {
            // item.modifier('active', 'remove');
        }
    });

    tabItems.forEach(item => {
        if (tabItems.indexOf(item) === tabIndex) {
            // item.modifier('active', 'add');
        } else {
            // item.modifier('active', 'remove');
        }
    });

    container.repaint();
}