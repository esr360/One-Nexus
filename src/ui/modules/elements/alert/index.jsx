import config from './assets/config';
import styles from './assets/styles';

const Alert = ({ alert, dismiss, icon, heading, children, ...props }) => {
  const evaluatedConfig = useConfig(config, useTheme());

  return (
    <Module alert={alert || evaluatedConfig.default} {...props}>
      {dismiss && <Component name='dismiss' className={`fa fa-times`} onClick={dismiss} />}

      {icon && <Component name='icon' className={`fa fa-${icon}`} />}

      {heading && <Component name='heading'>{heading}</Component>}

      {heading ? <Component name='content'>{children}</Component> : children}
    </Module>
  );
}

Alert.defaultProps = { name: 'Alert', config, styles }

export default Alert;