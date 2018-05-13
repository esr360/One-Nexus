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
    }

    componentDidMount() {
        if (typeof this.trigger === 'string') {
            document.getElementById(this.trigger).addEventListener('click', () => {
                this.toggle(ReactDOM.findDOMNode(this))
            }, false);
        }
    }

    render() {
        return [
            <Module {...this.props}>
                <Component name='close'>Close</Component>
                <Component name='content'>
                    {this.props.children}
                </Component>
            </Module>,

            React.isValidElement(this.trigger) && React.cloneElement(this.trigger, {
                onClick: () => this.toggle(ReactDOM.findDOMNode(this))
            })
        ]
    }
}

Modal.defaultProps = {
    name: defaults.modal.name
};