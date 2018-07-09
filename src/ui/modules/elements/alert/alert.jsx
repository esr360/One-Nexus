import defaults from './alert.json';

/**
 * Render Alert module
 *
 * @prop {String} alert
 * @prop {Bool} bar
 * @prop {Bool} box
 * @prop {(Bool|Array)} icon
 */
const Alert = props => {
    const config = Object.assign(defaults.alert, window.theme.alert);
    const alerts = config ? Object.keys(config.alerts) : [];
    const hasCustomIcon = icon => icon === undefined || icon === 'right';

    let modifiers = props.modifiers || [];
    let icon = props.icon;

    if (!Object.keys(props).some(prop => alerts.includes(prop))) {
        modifiers.push(props.alert);   
    }

    if (config && hasCustomIcon(icon) && !props.box && config.icon['default-enable']) {
        icon = config.alerts[props.alert].icon;

        Object.keys(props).forEach(prop => {
            if (alerts.includes(prop)) icon = config.alerts[prop].icon;
        });
    }

    return (
        <Module name={config.name} {...props} modifiers={modifiers} bar={props.box ? false : props.bar}>
            {icon &&
                <Component
                    name='icon'
                    modifiers={[(props.icon === 'right' || icon[1] === 'right') && 'right']}
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
    icon: undefined
};

export default Alert;