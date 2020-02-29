import config from './assets/config';
import styles from './assets/styles';

const Alert = (props) => {
  const [dismissed, dismiss] = useState(false);
  const theme = useTheme();
  const evaluatedConfig = useConfig(config, theme);

  console.log(evaluatedConfig);

  let { alert, close, icon, heading } = props;

  return (
    <Module dismissed={dismissed} alert={alert || evaluatedConfig.default} {...props}>
      {close && <Component name='close' className={`fa fa-times`} onClick={() => dismiss(true)} />}

      {icon && <Component name='icon' className={`fa fa-${icon}`} />}

      {heading && <Component name='heading'>{heading}</Component>}

      {heading ? <Component name='content'>{props.children}</Component> : props.children}
    </Module>
  );
}

Alert.defaultProps = { name: 'Alert', config, styles }

export default Alert;