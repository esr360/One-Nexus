import defaults from './modal.json';

/**
 * Render Modal module
 *
 * @prop {String} name
 */
export default class Modal extends React.Component {
    render() {
        return (
            <Module {...this.props}>
                {this.props.children}
            </Module>
        )
    }
}

Modal.defaultProps = {
    name: defaults.modal.name
};