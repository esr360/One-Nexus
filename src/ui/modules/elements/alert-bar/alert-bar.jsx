import defaults from './alert-bar.json';

/**
 * Render Alert component
 *
 * @prop {String} name
 * @prop {Bool} bar
 * @prop {Bool} box
 * @prop {(Bool|Array} icon
 * @prop {Array} modifiers
 */
export default class Alert extends React.Component {
    render() {
        let modifiers = this.props.modifiers || [];
        let className = this.props.className || '';

        if (this.props.bar) modifiers.push('bar');
        if (this.props.box) modifiers.push('box');

        const alert = () => {
            if (this.props.success) return 'success';
            if (this.props.error) return 'error';
            if (this.props.help) return 'help';
            if (this.props.info) return 'info';

            return this.props.alert;
        }

        modifiers.push(alert());

        if (this.props.object) className += 'object';

        return (
            <Module name={this.props.name} modifiers={modifiers} className={className}>
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
    name: defaults['alert-bar'].name,
    alert: 'success',
    bar: true,
    box: false,
    object: true,
    icon: false
};