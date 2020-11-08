import config from './assets/config';
import styles from './assets/styles';

const Alert = ({ dismiss, heading, children, ...props }) => {
  const { name, alerts, icon, header, alert = Module.modifiers(props).find($ => alerts[$]) } = useConfig(props);

  return (
    <Module name={name} {...props}>
      {dismiss && <Icon as='icon' glyph='times' right dismiss onClick={dismiss} />}

      <Icon as='icon' {...icon} glyph={alert ? alerts[alert].icon : icon.glyph} />

      {(heading || header?.render) && <Component name='header'>{heading}</Component>}

      <Component name='body'>{children}</Component>
    </Module>
  );
}

Alert.defaultProps = { config, styles }

export default Alert;