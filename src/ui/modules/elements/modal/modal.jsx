import defaults from './modal.json';

/**
 * Render Modal module
 *
 * @prop {String} name
 */
export default class Modal extends Constructor {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (typeof this.props.trigger === 'string') {
            document.getElementById(this.props.trigger).addEventListener('click', () => {
                this.toggle(ReactDOM.findDOMNode(this))
            }, false);
        }
    }

    render() {
        return (
            <div>
                {this.props.trigger}

                <Module {...this.props}>
                    <Component name='close'>Close</Component>
                    <Component name='content'>
                        {this.props.children}
                    </Component>
                </Module>
            </div>
        )
    }
}

Modal.defaultProps = {
    name: defaults.modal.name
};