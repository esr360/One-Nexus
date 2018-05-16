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
        this.close = (typeof this.props.close === 'function') ? this.props.close() : this.props.close;

        if (this.props.animate) {
            this.modifiers.push(`animate-${this.props.animate}`);
        }
    }

    componentDidMount() {
        // toggle modal on click of queried DOM triggers
        if (typeof this.trigger === 'string') {
            [...document.querySelectorAll(this.trigger)].forEach(trigger => trigger.addEventListener('click', () => {
                this.toggle(ReactDOM.findDOMNode(this))
            }, false));
        }
    }

    render() {
        return [
            <Module modifiers={this.modifiers} {...this.props}>
                {this.close && <Component name='close' from={this.close} />}

                <Component name='content'>
                    {this.props.children}
                </Component>
            </Module>,

            // toggle modal on click of rendered trigger
            React.isValidElement(this.trigger) && React.cloneElement(this.trigger, {
                onClick: () => this.toggle(ReactDOM.findDOMNode(this))
            })
        ]
    }
}

Modal.defaultProps = {
    name: defaults.modal.name,
    animate: 'top',
    close: () => <Component name='close'>×</Component>
};