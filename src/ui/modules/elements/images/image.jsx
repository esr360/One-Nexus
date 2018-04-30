import defaults from './images.json';

/**
 * Render Image component
 *
 * @prop {String} name
 */
export default class Image extends React.Component {
    render() {
        return (
            <Module {...this.props}>
                <Component name='figure' tag='img' src={this.props.src}>
                    {this.props.children}
                </Component>
            </Module>
        )
    }
}

Image.defaultProps = {
    name: defaults.images.name
};