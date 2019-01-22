export default (element, config, globals) => {
    return [config, {
        ...['checkbox', 'radio'].reduce((result, item) => {
            result[item] = {
                'height': '1em',
                'margin-right': '1em'
            };

            return result;
        }, {}),

        group: group => ({
            ...globals.object(group, `calc(${globals.core.margin} / 2)`),

            'position': 'relative',

            'modifier(compound)': {
                'margin-bottom': `calc(${globals.core.margin} / 4)`
            },

            'modifier(has-icon)': {
                ...['input', 'select'].reduce((result, item) => {
                    result[item] = {
                        'padding-left': '2em'
                    };

                    return result;
                }, {}),
            },

            'modifier(validate)': {
                'modifier(isValid)': {
                    ...['label', 'field', 'icon', 'input', 'select'].reduce((result, item) => {
                        result[item] = {
                            'color': config['valid-color'],
                            'border-color': 'currentColor'
                        };
    
                        return result;
                    }, {}),
                },

                'modifier(isInvalid)': {
                    ...['label', 'field', 'icon', 'input', 'select'].reduce((result, item) => {
                        result[item] = {
                            'color': config['invalid-color'],
                            'border-color': 'currentColor'
                        };
    
                        return result;
                    }, {}),
                }
            },

            'modifier(isSelect)': {
                'position': 'relative'
            }
        }),

        fieldset: fieldset => ({
            ...globals.object(fieldset, config.fieldset.gutter),

            'padding': '0',
            'border': 'none'
        }),

        field: field => ({
            'position': 'relative',
            'display': 'inline-block',
            'width': '100%'
        }),

        icon: icon => ({
            'position': 'absolute',
            'top': '50%',
            'transform': 'translateY(-50%)',
            'left': '0.75em',
            'color': config.input.color,
            'transition': globals.core.transition
        }),

        input: input => ({
            'display': 'block',
            'width': '100%',
            'outline': 'inherit',

            ':focus': {
                'outline': 0
            }
        }),

        select: select => ({
            'width': '100%',
            'appearance': 'none' // @TODO this doesn't seem to work
        })
    }]
}