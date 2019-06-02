import config from './assets/config.js';
import layout from './assets/layout.js';

/**
 * 
 */
const Button = props => (
    <Module tag={props.href ? 'a' : false} {...props} />
);

export default Object.assign(Button, { 
    layout, config, defaultProps: {
        name: 'Button',
        fluid: true
    }
});