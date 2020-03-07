import config from './assets/config.js';
import styles from './assets/styles.js';

const Blockquote = ({ content, footer, ...props }) => (
  <Module {...props}>
    <Component name='content'>{content}</Component>

    {footer && <Component tag='footer'>{footer}</Component>}
  </Module>
);

Blockquote.defaultProps = { name: 'Blockquote', config, styles }

export default Blockquote;