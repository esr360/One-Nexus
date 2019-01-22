import defaults from './assets/config.js';
import layout from './assets/layout.js';
import interactions from './assets/interactions.js';

const Overlay = props => {
    return (
        <Module {...props}>{props.children}</Module>
    );
}

export default Object.assign(Overlay, {
    ...interactions, layout, defaults, defaultProps: {
        name: 'Overlay'
    }
});