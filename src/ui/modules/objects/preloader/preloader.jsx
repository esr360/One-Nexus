import defaults from './preloader.json';
import interactions from './preloader.js';

/**
 * Render Preloader module
 */
const Preloader = ({ toggle, close, ...props }) => {
    const config = Object.assign(defaults.preloader, window.theme.preloader);

    window.addEventListener('load', toggle, true);

    return (
        <Module name={config.name} {...props}>
            <Component name='holder'><Component name='spinner' /></Component>

            {close && <Component name='close'>{close()}</Component>}
        </Module>
    );
};

Preloader.defaultProps = {
    toggle: interactions.toggle,
    close: () => <Button onClick={interactions.toggle} round border size-2>Disable Preloader</Button>
};

export default Preloader;