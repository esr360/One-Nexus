import Color from 'color';

export default function layout(element, config, globals) {
    return [config, {
        'display': 'inline-block',
        'border-color': 'transparent',
        'text-decoration': 'none',
        'vertical-align': 'middle',
        'cursor': 'pointer',
        'font-size': globals.fontSize(element, config.sizes, globals),
        'padding': `${config['padding-y']} ${config['padding-x']}`,

        // Colored Buttons
        ...Object.entries(config.colors).reduce((result, color) => {
            const colorDark = Color(color[1]).darken(0.1).string();

            return element.modifier(color[0]) && !element.modifier('active') ? {
                'background-color': element.modifier('border') ? 'transparent' : color[1],
                'border-color': element.modifier('border') ? color[1] : 'transparent',
                'color': () => {
                    if (element.modifier('border')) return color[1];

                    if (Color(color[1]).luminosity() > 0.6) {
                        return globals.typography.colors.base(globals.colors);
                    }

                    return config.color;
                },
                ':hover': {
                    'background-color': colorDark,
                    'color': element.modifier('border') && config.color
                }
            } : result;
        }, {}),

        'modifier(block)': {
            'width': '100%',
            'text-align': 'center'
        },

        'modifier(disabled)': {
            'transition-delay': '999s',
            'opacity': config['disabled-opacity'],
            'cursor': 'not-allowed'
        },

        'modifier(round)': {
            'border-radius': config['round-radius']
        },

        'modifier(oval)': {
            'border-radius': '1.5em'
        },

        'modifier(sharp)': {
            'border-radius': 0
        },

        'modifier(icon)': {
            'text-align': 'center',
            'padding': config['padding-y']
        },

        'modifier(active)': {
            'background': config.active.background,
            'border-color': config.active.background,
            'color': config.color,

            ':hover': {
                'background': 'red',
                'border-color': 'red'
            }
        },

        icon: icon => ({
            'height': '1em',
            'width': '1em'
        }),

        group: group => ({
            button: [element, {
                'margin-left': !element.isFirstChild && config['group-spacing']
            }],

            'modifier(pills)': {
                'display': 'table',
                'width': '100%',

                button: [element, {
                    'display': 'table-cell',
                    'margin-left': 0
                }],

                'modifier(round)': {
                    button: [element, {
                        'border-top-left-radius': element.isFirstChild && config['round-radius'],
                        'border-bottom-left-radius': element.isFirstChild && config['round-radius'],
                        'border-top-right-radius': element.isLastChild && config['round-radius'],
                        'border-bottom-right-radius': element.isLastChild && config['round-radius'],
                    }]
                }
            },

            'modifier(stack)': {
                ...(window.matchMedia(`(max-width: ${config['group-stack']}`).matches && {
                    button: [element, {
                        'display': 'block',
                        'width': '100%',
                        'margin-top': element !== group.firstChild && '1em',
                        'margin-right': 0,
                        'margin-left': 0,
                        'text-align': 'center'
                    }]
                })
            }
        })
    }]
}