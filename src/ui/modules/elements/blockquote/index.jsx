import config from './assets/config.js';
import styles from './assets/styles.js';

const Blockquote = ({ content, footer, ...props }) => {
  const { name } = useConfig(props);

  return (
    <Module name={name} {...props}>
      <Component name='content'>{content}</Component>

      {footer && <Component tag='footer'>{footer}</Component>}
    </Module>
  );
}

Blockquote.defaultProps = { config, styles }

export default Blockquote;