import defaults from './carousel.json';
import interactions from './carousel.js';

/**
 * Render Carousel module
 *
 * @prop {Array} slides
 * @prop {Function} init
 */
const Carousel = ({ slides, init, options, ...props }) => {
    const config = Object.assign(defaults.carousel, window.theme.carousel);

    let carousel;

    window.addEventListener('load', () => init(ReactDOM.findDOMNode(carousel)), true);

    return (
        <Module name={config.name} data-carousel={JSON.stringify(options)} ref={node => carousel = node} {...props}>
            { slides.map((slide, index) => <Component name='slide' key={index}>{ slide }</Component>) }
        </Module>
    );
}

Object.assign(Carousel, interactions, {
    defaultProps: {
        object: true,
        init: interactions.init
    }
});

export default Carousel;