export default {
    activate
}

export function activate(event) {
    const container = event.target.closest('[data-module]');
    const navItems = [...event.target.closest('[data-component="nav"]').children];
    const tabItems = container.component('item');
    const tabIndex = navItems.indexOf(event.target.hasAttribute('data-component') ? event.target : event.target.closest('[data-component]'));

    navItems.forEach(item => {
        if (navItems.indexOf(item) === tabIndex) {
            item.modifier('active', 'set');
        } else {
            item.modifier('active', 'unset');
        }
    });

    tabItems.forEach(item => {
        if (tabItems.indexOf(item) === tabIndex) {
            item.modifier('active', 'set');
        } else {
            item.modifier('active', 'unset');
        }
    });
}