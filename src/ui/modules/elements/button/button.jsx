import defaults from './assets/config.js';
import layout from './assets/layout.js';

/**
 * 
 */
const Button = props => (
    <Module tag={props.href ? 'a' : false} {...props} />
);

export default Object.assign(Button, { 
    layout, defaults, defaultProps: {
        name: 'Button',
        fluid: true
    }
});