import defaults from './alert.json';
/**
 * Render Alert module
 *
 * @prop {String} alert
 * @prop {Bool} bar
 * @prop {Bool} box
 * @prop {(Bool|Array)} icon
 */
export default class Alert extends React.Component {
    // Methods
    dismiss() {}

    componentWillMount() {
        const config = UI.get().config('alert');
        const alerts = config ? Object.keys(config.alerts) : [];

        let modifiers = this.props.modifiers || [];
        let icon = this.props.icon;

        if (!Object.keys(this.props).some(prop => alerts.includes(prop))) {
            modifiers.push(this.props.alert);   
        }

        if (config && (icon === undefined || icon === 'right') && !this.props.box && config.icon['enable-by-default']) {
            icon = config.alerts[this.props.alert].icon;

            Object.keys(this.props).forEach(prop => {
                if (alerts.includes(prop)) icon = config.alerts[prop].icon;
            });
        }

        this.modifiers = modifiers;
        this.icon = icon;
    }

    render() {
        return (
            <Module {...this.props} modifiers={this.modifiers} bar={this.props.box ? false : this.props.bar}>
                {this.icon &&
                    <Component
                        name='icon'
                        modifiers={[(this.props.icon === 'right' || this.icon[1] === 'right') && 'right']}
                        className={`fa fa-${Array.isArray(this.icon) ? this.icon[0] : this.icon}`}
                    />
                }

                {this.props.close &&
                    <Component
                        name='icon'
                        onClick={this.dismiss}
                        modifiers={['close', 'right']}
                        className={`fa fa-times`}
                    />
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
    icon: undefined
};