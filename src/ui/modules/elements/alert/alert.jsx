import defaults from './alert.json';

/**
 * Render Alert component
 *
 * @prop {String} name
 * @prop {String} alert
 * @prop {Bool} bar
 * @prop {Bool} box
 * @prop {(Bool|Array} icon
 * @prop {Array} modifiers
 */
export default class Alert extends React.Component {

    componentWillMount() {
        let modifiers = this.props.modifiers || [];
        let alert = this.props.alert;
        let icon = this.props.icon;
        let hasAlertProp = false;

        if (global.THEME && global.THEME.alert) {
            const alerts = Object.keys(global.THEME.alert.alerts);

            if ((!icon || icon === 'right') && global.THEME.alert.icon['enable-by-default']) {
                icon = global.THEME.alert.alerts[alert].icon;

                Object.keys(this.props).forEach(prop => {
                    if (alerts.includes(prop)) icon = global.THEME.alert.alerts[prop].icon;
                });
            }

            hasAlertProp = Object.keys(this.props).some(prop => alerts.includes(prop));
        }

        if (!hasAlertProp) modifiers.push(alert);

        [this.modifiers, this.icon] = [modifiers, icon];
    }

    render() {
        return (
            <Module {...this.props} modifiers={this.modifiers} bar={this.props.box ? false : this.props.bar}>
                {this.icon &&
                    <Component
                        name='icon'
                        modifiers={[(this.props.icon === 'right' || this.icon[1] === 'right') && 'right']}
                        className={`fa fa-${Array.isArray(this.icon) ? this.icon[0] : this.icon}`}
                    ></Component>
                }

                {this.props.close &&
                    <Component
                        name='icon'
                        onClick={typeof this.props.close === 'function' ? this.props.close : undefined}
                        modifiers={['close', 'right']}
                        className={`fa fa-times`}
                    ></Component>
                }

                {this.props.box ?
                    <Component name='content'>{this.props.children}</Component> : this.props.children
                }
            </Module>
        )
    }
}

Alert.defaultProps = {
    name: defaults.alert.name,
    alert: 'success',
    bar: true,
    box: false,
    object: true,
    icon: false
};