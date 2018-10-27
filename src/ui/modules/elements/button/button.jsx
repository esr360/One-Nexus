import defaults from './assets/config.js';
import layout from './assets/layout.jss';

/**
 * 
 */
const Button = props => (
    <Module tag={props.href ? 'a' : false} {...props} />
);

Object.assign(Button, { 
    layout, defaults, defaultProps: {
        name: 'Button',
        fluid: true
    }
});

export default Button;