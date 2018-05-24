import defaults from './modal.json';
/**
 * Render Modal module
 *
 * @prop {String} name
 */
export default class Modal extends Constructor {
    constructor(props) {
        super(props);

        this.trigger = this.props.trigger;
        this.modifiers = this.props.modifiers || [];

        if (this.props.animate) {
            this.modifiers.push(`animate-${this.props.animate}`);
        }
    }

    componentDidMount() {
        if (typeof this.trigger === 'string') {
            document.querySelectorAll(this.trigger).forEach(trigger => {
                trigger.addEventListener('click', () => {
                    this.toggle(ReactDOM.findDOMNode(this));
                }, false)
            });
        }
    }

    static close(props) {
        return props.children && (
            <Component {...props} name='close'>{props.children}</Component>
        );
    }

    static content(props) {
        return <Component name='content'>{props.content||props.children}</Component>;
    }

    render() {
        return [
            <Module modifiers={this.modifiers} {...this.props}>
                {this.content([
                    this.constructor.close({
                        children: this.props.close, 
                        modifiers: ['icon']
                    }),
                    this.constructor.content(this.props)
                ])}
            </Module>,

            React.isValidElement(this.trigger) && React.cloneElement(this.trigger, {
                onClick: () => this.toggle(ReactDOM.findDOMNode(this))
            })
        ]
    }
}

Modal.defaultProps = {
    name: defaults.modal.name,
    animate: 'top',
    close: '×'
};