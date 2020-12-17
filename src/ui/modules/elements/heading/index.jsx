import config from './assets/config.js';
import styles from './assets/styles.js';

const Heading = ({ heading, ...props }) => {
  const { name } = useConfig(props);

    return <Module name={name} tag={heading ? `h${heading}` : 'div'} {...props} />;
}

Heading.defaultProps = { config, styles }

export default Heading;