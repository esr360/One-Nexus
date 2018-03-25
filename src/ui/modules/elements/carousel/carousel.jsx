import defaults from './carousel.json';
/**
 * Render Carousel module
 *
 * @param {Array}  props.slides
 */
export default class Carousel extends React.Component {
    render() {
        return (
            <Module {...this.props}>
                {this.props.slides.map((slide, index) => ( 
                    <Component name='slide'>{ slide }</Component>
                ))}
            </Module>
        )
    }
}

Carousel.defaultProps = {
    name: defaults.carousel.name,
    object: true
};