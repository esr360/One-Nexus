import config from './assets/config.js';
import styles from './assets/styles.js';

const Button = props => {
  const { name } = useConfig(props);

  return <Module name={name} tag={props.href ? 'a' : 'button'} {...props} />;
}

Button.defaultProps = { config, styles }

export default Button;