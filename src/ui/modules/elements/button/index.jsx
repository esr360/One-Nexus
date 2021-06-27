import config from './assets/config.js';
import styles from './assets/styles.js';

const Button = ({ href, tag = href ? 'a' : 'button', ...props }) => {
  const { name } = useConfig(props);

  return <Module name={name} tag={tag} {...props} />;
}

Button.defaultProps = { config, styles }

export default Button;