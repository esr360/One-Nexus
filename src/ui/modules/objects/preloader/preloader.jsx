import defaults from './assets/config.js';
import layout from './assets/layout.jss';
import interactions from './assets/interactions.js';

/**
 * Render Preloader module
 */
const Preloader = ({ toggle, close, ...props }) => {
    window.addEventListener('load', toggle, true);

    return (
        <Module {...props}>
            <Component name='holder'>
                <Component name='spinner' />
            </Component>

            {close && <Component name='close'>{close()}</Component>}
        </Module>
    );
};

export default Object.assign(Preloader, {
    ...interactions, layout, defaults, defaultProps: {
        toggle: interactions.toggle,
        close: () => <Button onClick={interactions.toggle} round border size-2>Disable Preloader</Button>
    }
});