import defaults from './assets/config.js';
import layout from './assets/layout.jss';

/**
 * Render Button module
 */
const Button = props => {
    const config = Object.assign(defaults(window.theme), window.theme.button);

    return (
        <Module name={config.name} tag={props.href ? 'a' : false} styles={[layout, config, window.theme]} {...props}>
            {props.children}
        </Module>
    );
}

Button.defaultProps = {
    fluid: true
};

export default Button;