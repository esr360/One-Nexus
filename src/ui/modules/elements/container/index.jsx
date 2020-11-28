import config from './assets/config';
import styles from './assets/styles';

const Container = props => {
  const { name } = useConfig(props);

  return <Module name={name} {...props} />;
}

Container.defaultProps = { config, styles }

export default Container;