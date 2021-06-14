import config from './assets/config.js';
import styles from './assets/styles.js';

const Overlay = props => {
  const { name, closeOnClick } = useConfig(props);

  const onClick = closeOnClick !== false && props.onClick;
  
  return <Module name={name} {...props} dismissable={onClick} onClick={onClick} />;
}

Overlay.defaultProps = { config, styles }

export default Overlay;