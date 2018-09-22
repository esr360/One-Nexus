import defaults from './assets/config.js';
import interactions from './assets/interactions.js';
import layout from './assets/layout.jss';

/**
 * Render Alert module
 *
 * @prop {String} [alert = 'success']
 * @prop {*} icon
 * @prop {Function} dismiss
 */
const Alert = ({ alert, icon, dismiss, ...props }) => {
    const config = Module.config(defaults(window.theme), window.theme.alert);
    const alerts = config ? Object.keys(config.alerts) : [];
    const hasCustomIcon = icon => icon === undefined || icon === 'right';

    let modifiers = props.modifiers || [];

    if (!Object.keys(props).some(prop => alerts.includes(prop))) {
        modifiers.push(alert);   
    }

    if (config && hasCustomIcon(icon) && !props.box && config.icon['default-enable']) {
        icon = config.alerts[alert].icon;

        Object.keys(props).forEach(prop => {
            if (alerts.includes(prop)) icon = config.alerts[prop].icon;
        });
    }

    return (
        <Module 
            name={config.name} {...props} 
            modifiers={modifiers} 
            bar={props.box ? false : props.bar} 
            styles={[layout, config, window.theme]}
        >
            {icon &&
                <Component
                    name='icon'
                    modifiers={[(icon === 'right' || icon[1] === 'right') && 'right']}
                    className={`fa fa-${Array.isArray(icon) ? icon[0] : icon}`}
                />
            }

            {props.close &&
                <Component
                    name='icon'
                    onClick={dismiss}
                    modifiers={['close', 'right']}
                    className={`fa fa-times`}
                />
            }

            {props.box ?
                <Component name='content'>{props.children}</Component> : props.children
            }
        </Module>
    );
}

Object.assign(Alert, interactions, {
    defaultProps: {
        alert: 'success',
        bar: true,
        box: false,
        object: true,
        icon: undefined,
        dismiss: interactions.dismiss
    }
});

export default Alert;