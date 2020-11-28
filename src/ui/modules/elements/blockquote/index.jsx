import config from './assets/config.js';
import styles from './assets/styles.js';

const Blockquote = ({ source, children, ...props }) => {
  const { name, footer } = useConfig(props);

  return (
    <Module name={name} {...props}>
      <Component name='body'>{children}</Component>

      {(source || footer?.render) && <Component name='footer'>{source}</Component>}
    </Module>
  );
}

Blockquote.defaultProps = { config, styles }

export default Blockquote;