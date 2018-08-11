/**
 * Accordion layout styles
 * 
 * @param {HTMLElement} element - DOM element of accordion
 * @param {Object} globals - global UI toolkit
 */
export default (element, config, globals) => {
    return [config, {

        panel: panel => ({
            'display': 'block',

            ...globals.verticalRhythm(panel, 'bottom')
        }),

        title: title => {
            const panel = title.closest('[data-component="panel"]');

            return {
                'display': 'block',
                'margin': 0,
                'backface-visibility': 'hidden',
                'font-weight': 'normal',
                'line-height': 1,
                'cursor': 'pointer',
                'border-bottom': ['important', 
                    (panel !== panel.parentNode.lastChild) && !panel.style.marginBottom ? 0 : false
                ]
            }
        },

        toggle: toggle => {
            const panel = toggle.closest('[data-component="panel"]');

            console.log(globals.accordion);

            return {
                'float': 'right',
                'line-height': 0.75,
                'transform': panel.modifier('active') ? 'rotate(90deg) translateZ(0)' : 'none'
            }
        },

        content: content => {
            const panel = content.closest('[data-component="panel"]');

            return {
                'display': panel.modifier('active') ? 'block' : 'none',
                'margin': 0,
                'margin-top': '-1px',
                'border-bottom': ['important', 
                    (panel !== panel.parentNode.lastChild) && !panel.style.marginBottom ? 0 : false
                ]
            }
        }
    }]
};