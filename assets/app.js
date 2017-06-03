//*****************************************************************
// One-Nexus
// A powerful and responsive grid system.
// https://github.com/esr360/One-Nexus
//*****************************************************************

import synergy from '../node_modules/Synergy/src/js/synergy';

Element.prototype.component = function(component, set) {
    return synergy(this).component(component, set, this);
};

Element.prototype.modifier = function(modifier, set) {
    return synergy(this).modifier(modifier, set, this);
};

//*****************************************************************
// Elements
//*****************************************************************

import accordion from './modules/elements/accordions/accordions';

module.exports = {
    synergy, accordion
}