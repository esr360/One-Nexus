export default (element, config, globals) => {
    const layout = {
        ...globals.center(),

        'top': config['top-position'],
        'visibility': 'hidden',
        'position': 'fixed',
        'max-width': '90%',
        'max-height': '90%',
        'overflow': 'auto',
        'opacity': 0,

        'modifier(visible)': {
            'visibility': 'visible',
            'opacity': 1
        },

        'modifier(animate)': {
            'transition': globals.core.transition,

            'modifier(top)': {
                'top': `calc(${config['top-position']} * 0.9)`,

                'modifier(visible)': {
                    'list-style-type': 'disc',
                    'color': 'red',
                    'top': config['top-position']
                }
            },

            'modifier(bottom)': {
                'top': `calc(${config['top-position']} * 1.1)`,

                'modifier(visible)': {
                    'top': config['top-position']
                }
            },

            'modifier(left)': {
                'transform': 'translateX(-15%) translateY(-50%)',

                'modifier(visible)': {
                    'transform': 'translateX(0) translateY(-50%)'
                }
            },

            'modifier(right)': {
                'transform': 'translateX(15%) translateY(-50%)',

                'modifier(visible)': {
                    'transform': 'translateX(0) translateY(-50%)'
                }
            },

            'modifier(zoom)': {
                'transform': 'scale(0.5) translateY(-75%)',

                'modifier(visible)': {
                    'transform': 'transform: scale(1) translateY(-50%)'
                }
            }
        },

        close: () => ({
            'cusor': 'pointer',

            'modifier(icon)': {
                'position': 'absolute'
            }
        }),

        overlay: [config.overlay.element(), config.overlay],
    }

    return [config, layout];
};