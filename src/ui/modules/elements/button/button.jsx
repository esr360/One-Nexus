import defaults from './button.json';

/**
 * Render Button module
 */
const Button = props => {
    const config = Object.assign(defaults.button, window.theme.button);

    return (
        <Module name={config.name} tag={props.href ? 'a' : false} {...props}>
            {props.children}
        </Module>
    );
}

Button.defaultProps = {
    fluid: true
};

export default Button;