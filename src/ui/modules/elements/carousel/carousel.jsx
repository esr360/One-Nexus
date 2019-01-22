import defaults from './assets/config';
import layout from './assets/layout.js';
import interactions from './assets/interactions';

/**
 * Render Carousel module
 *
 * @prop {Array} slides
 * @prop {Function} init
 */
const Carousel = ({ slides, options, ...props }) => (
    <Module data-carousel={JSON.stringify(options)} {...props}>
        { slides.map((slide, index) => <Component name='slide' key={index}>{ slide }</Component>) }
    </Module>
);

export default Object.assign(Carousel, {
    ...interactions, layout, defaults, defaultProps: {
        name: 'Carousel',
        object: true
    }
});