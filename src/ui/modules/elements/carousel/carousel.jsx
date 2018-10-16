import defaults from './assets/config';
import interactions from './assets/interactions';
import layout from './assets/layout.jss';

/**
 * Render Carousel module
 *
 * @prop {Array} slides
 * @prop {Function} init
 */
const Carousel = ({ slides, init, options, ...props }) => {
    const config = Module.config(defaults(window.theme), window.theme.carousel);

    return (
        <Module name={config.name} data-carousel={JSON.stringify(options)} styles={[layout, config, window.theme]} init={init} {...props}>
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