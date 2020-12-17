import config from './assets/config.js';
import styles from './assets/styles.js';

const Icon = ({ glyph, ...props }) => {
  const { name } = useConfig(props);

  return <Module name={name} tag='i' className={`fa fa-${glyph}`} {...props} />;
}

Icon.defaultProps = { config, styles }

export default Icon;