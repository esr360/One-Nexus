import config from './assets/config.js';
import layout from './assets/layout.js';
import interactions from './assets/interactions.js';

const Overlay = props => {
    return (
        <Module {...props}>{props.children}</Module>
    );
}

export default Object.assign(Overlay, {
    ...interactions, layout, config, defaultProps: {
        name: 'Overlay'
    }
});