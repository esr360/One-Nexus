import config from './assets/config';
import styles from './assets/styles';

/**
 * Render Alert module
 */
const Alert = (props) => {
  const [dismissed, dismiss] = useState(false);

  let { alert, close, icon, heading } = props;

  return (
    <Module dismissed={dismissed} {...props}>
      {({ config }) => {
        if (icon === true) icon = config.alerts[alert].icon;
        
        return (
          <Fragment>
            {close && <Component name='close' className={`fa fa-times`} onClick={() => dismiss(true)} />}

            {icon && <Component name='icon' className={`fa fa-${icon}`} />}

            {heading && <Component name='heading'>{heading}</Component>}

            {heading ? <Component name='content'>{props.children}</Component> : props.children}
          </Fragment>
        );
      }}
    </Module>
  );
}

export default Object.assign(Alert, {
  styles, config, defaultProps: {
    name: 'Alert',
    alert: 'success',
    icon: true
  }
});