import config from './assets/config.js';
import styles from './assets/styles.js';

const Overlay = props => {
  const { name } = useConfig(props);
  
  return <Module name={name} dismissable={props.onClick} {...props} />;
}

Overlay.defaultProps = { config, styles }

export default Overlay;