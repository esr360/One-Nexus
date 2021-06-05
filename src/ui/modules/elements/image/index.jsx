import config from './assets/config.js';
import styles from './assets/styles.js';

const Image = ({ src, children, ...props }) => {
  const { name } = useConfig(props);

  return (
    <Module name={name} {...props}>
      <Component name='figure' tag='img' src={src}>{children}</Component>
    </Module>
  )
}

Image.defaultProps = { config, styles }

export default Image;