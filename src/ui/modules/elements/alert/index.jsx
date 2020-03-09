import config from './assets/config';
import styles from './assets/styles';

const Alert = ({ alert, dismiss, heading, children, ...props }) => {
  let { defaultAlert, alerts, icon } = useConfig(config, useTheme(), props);

  icon = (icon === true) ? (alerts[alert || defaultAlert].icon) : icon;

  return (
    <Module alert={alert || defaultAlert} {...props}>
      {dismiss && <Component name='dismiss' className={`fa fa-times`} onClick={dismiss} />}

      {icon && <Component name='icon' className={`fa fa-${icon}`} />}

      {heading && <Component name='heading'>{heading}</Component>}

      {heading ? <Component name='content'>{children}</Component> : children}
    </Module>
  );
}

Alert.defaultProps = { name: 'Alert', config, styles }

export default Alert;