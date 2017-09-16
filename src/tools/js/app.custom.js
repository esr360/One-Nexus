import * as app from '../../app';

/**
 * Custom
 * 
 * @access public
 * 
 * @param {String} module
 * @param {Object} custom
 */
export function custom(module, custom) {

    if (app.theme && typeof app.theme[module] !== 'undefined' && (!custom || custom !== {})) {
        custom = app.theme[module];
    }

    if (custom) {
        custom.componentGlue = (app.global && app.global['component-glue']) ? app.global['component-glue'] : '_';
        custom.modifierGlue  = (app.global && app.global['modifier-glue'] ) ? app.global['modifier-glue']  : '-';
    }

    return custom;
}