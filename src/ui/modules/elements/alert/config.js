export default function config(theme) {
    return {
        'name': 'alert',
        'color': theme.colors.greyscale.white,

        'alerts': {
            'error': {
                'color': theme.colors.alert.error,
                'icon': 'times'
            },
            'success': {
                'color': theme.colors.alert.success,
                'icon': 'check'
            },
            'info': {
                'color': theme.colors.alert.info,
                'icon': 'info-circle'
            },
            'help': {
                'color': theme.colors.alert.help,
                'icon': 'question-circle'
            }
        },

        icon: {
            'default-enable': true
        },

        'modifier(bar)': {
            'padding': '0.85em'
        },

        'modifier(box)': {
            'padding': '1.5em'
        }
    }
}