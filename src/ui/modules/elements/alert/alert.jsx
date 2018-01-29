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
    render() {
        let modifiers = this.props.modifiers || [];
        let className = this.props.className || '';

        let alerts = [];

        if (window.APPUI && window.APPUI.colors && window.APPUI.colors.alert) {
            alerts = Object.keys(window.APPUI.colors.alert);
        }

        if (!Object.keys(this.props).some(alert => alerts.includes(alert))) {
            modifiers.push(this.props.alert);
        }

        if (this.props.object) className = className + 'object';

        return (
            <Module {...this.props} name={this.props.name} modifiers={modifiers} className={className}>
                {this.props.icon && 
                    <Component 
                        name='icon' 
                        modifiers={[(this.props.icon[1] === 'right') && 'right']} 
                        className={`fa fa-${Array.isArray(this.props.icon) ? this.props.icon[0] : this.props.icon}`}
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