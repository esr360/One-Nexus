import config from './assets/config.js';
import styles from './assets/styles.js';

const Paragraph = ({ tag="p", children, ...props }) => {
  const { name } = useConfig(props);

  return <Module name={name} tag={tag} {...props}>{children}</Module>;
}


Paragraph.defaultProps = { config, styles }

export default Paragraph;