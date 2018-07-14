import defaults from './carousel.json';
import interactions from './carousel.js';

/**
 * Render Carousel module
 *
 * @prop {Array} slides
 * @prop {Function} init
 */
const Carousel = ({ slides, init, ...props }) => {
    const config = Object.assign(defaults.carousel, window.theme.carousel);

    let carousel;

    window.addEventListener('load', () => init(ReactDOM.findDOMNode(carousel)), true);

    return (
        <Module name={config.name} ref={node => carousel = node} {...props}>
            { slides.map((slide, index) => <Component name='slide' key={index}>{ slide }</Component>) }
        </Module>
    );
}

Carousel.defaultProps = {
    object: true,
    init: interactions.init
};

export default Carousel;