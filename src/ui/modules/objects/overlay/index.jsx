import config from './assets/config.js';
import styles from './assets/styles.js';

const Overlay = props => {
  const { name } = useConfig(props);
  
  return <Module name={name} {...props} />;
}

Overlay.defaultProps = { config, styles }

export default Overlay;