import defaults from './assets/config.js';
import layout from './assets/layout.js';
import interactions from './assets/interactions.js';

/**
 * Render Preloader module
 */
const Preloader = ({ toggle, close, ...props }) => {
    return window.appLoaded ? null : (
        <Module {...props}>
            <Component name='holder'>
                <Component name='spinner' className='animate--spin' />
            </Component>

            {close && <Component name='close'>{close()}</Component>}
        </Module>
    );
};

export default Object.assign(Preloader, {
    ...interactions, layout, defaults, defaultProps: {
        name: 'Preloader',
        close: () => <Button onClick={interactions.toggle} round border size-2>Disable Preloader</Button>
    }
});