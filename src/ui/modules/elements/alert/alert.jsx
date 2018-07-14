import defaults from './alert.json';
import interactions from './alert.js';

/**
 * Render Alert module
 *
 * @prop {String} [alert = 'success']
 * @prop {*} icon
 * @prop {Function} dismiss
 */
const Alert = ({ alert, icon, dismiss, ...props }) => {
    const options = Object.assign(defaults.alert, window.theme.alert);
    const alerts = options ? Object.keys(options.alerts) : [];
    const hasCustomIcon = icon => icon === undefined || icon === 'right';

    let modifiers = props.modifiers || [];

    if (!Object.keys(props).some(prop => alerts.includes(prop))) {
        modifiers.push(alert);   
    }

    if (options && hasCustomIcon(icon) && !props.box && options.icon['default-enable']) {
        icon = options.alerts[alert].icon;

        Object.keys(props).forEach(prop => {
            if (alerts.includes(prop)) icon = options.alerts[prop].icon;
        });
    }

    return (
        <Module name={options.name} {...props} modifiers={modifiers} bar={props.box ? false : props.bar}>
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

Alert.defaultProps = {
    alert: 'success',
    bar: true,
    box: false,
    object: true,
    icon: undefined,
    dismiss: interactions.dismiss
};

export default Alert;