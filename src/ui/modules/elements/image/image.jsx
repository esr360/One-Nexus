import defaults from './image.json';

/**
 * Render Image component
 */
const Image = props => {
    const config = Object.assign(defaults.image, window.theme.image);

    return (
        <Module name={config.name} {...props}>
            <Component name='figure' tag='img' src={props.src}>
                {props.children}
            </Component>
        </Module>
    );
}

Image.defaultProps = {};

export default Image;