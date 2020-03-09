import config from './assets/config';
import styles from './assets/styles';

const Alert = ({ dismiss, heading, children, ...props }) => {
  let { name, alerts, alert, icon } = useConfig(props);

  alert = (typeof alert === 'object') ? alert : alerts[alert];
  icon  = (icon === true) ? alert.icon : icon;

  return (
    <Module name={name} {...props} alert={alert}>
      {dismiss && <Component name='dismiss' className={`fa fa-times`} onClick={dismiss} />}

      {icon && <Component name='icon' className={`fa fa-${icon}`} />}

      {heading && <Component name='heading'>{heading}</Component>}

      {heading ? <Component name='content'>{children}</Component> : children}
    </Module>
  );
}

Alert.defaultProps = { config, styles }

export default Alert;