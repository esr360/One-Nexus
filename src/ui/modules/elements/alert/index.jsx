import config from './assets/config';
import styles from './assets/styles';

const Alert = ({ dismiss, heading, children, ...props }) => {
  const { name, alerts, icon, alert = Object.keys(props).find($ => alerts[$]) } = useConfig(props);

  return (
    <Module name={name} {...props}>
      {dismiss && <Component name='dismiss' className={`fa fa-times`} onClick={dismiss} />}

      {icon && <Component name='icon' className={`fa fa-${alert ? alerts[alert].icon : icon.glyph}`} />}

      {heading && <Component name='heading'>{heading}</Component>}

      {heading ? <Component name='content'>{children}</Component> : children}
    </Module>
  );
}

Alert.defaultProps = { config, styles }

export default Alert;