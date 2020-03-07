import config from './assets/config.js';
import styles from './assets/styles.js';

const Button = props => (
    <Module tag={props.href ? 'a' : 'button'} {...props} />
);

Button.defaultProps = { name: 'Button', config, styles }

export default Button;