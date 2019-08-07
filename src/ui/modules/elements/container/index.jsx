import config from './assets/config';
import styles from './assets/styles';

const Container = (props) => <Module {...props} />

export default Object.assign(Container, { 
  config, styles, defaultProps: {
    name: 'Container'
  }
});