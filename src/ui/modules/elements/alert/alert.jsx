import defaults from './alert.json';
/**
 * Render Alert module
 *
 * @prop {String} alert
 * @prop {Bool} bar
 * @prop {Bool} box
 * @prop {(Bool|Array)} icon
 */
export default class Alert extends Constructor {

    constructor(props) {
        super(props);

        this.alerts = this.config ? Object.keys(this.config.alerts) : [];
        this.modifiers = this.props.modifiers || [];
        this.icon = this.props.icon;

        if (!Object.keys(this.props).some(prop => this.alerts.includes(prop))) {
            this.modifiers.push(this.props.alert);   
        }

        if (this.config && this.hasCustomIcon(this.icon) && !this.props.box && this.config.icon['default-enable']) {
            this.icon = this.config.alerts[this.props.alert].icon;

            Object.keys(this.props).forEach(prop => {
                if (this.alerts.includes(prop)) this.icon = this.config.alerts[prop].icon;
            });
        }
    }

    hasCustomIcon(icon) {
        return icon === undefined || icon === 'right';
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