import defaults from './wells.json';

/**
 * Render Well module
 *
 * @prop {String} name
 */
export default class Well extends React.Component {
    render() {
        return (
            <Module {...this.props}>
                {this.props.children}
            </Module>
        )
    }
}

Well.defaultProps = {
    name: defaults.wells.name,
    object: true
};