import config from './assets/config.js';
import styles from './assets/styles.js';

const List = ({ children, ...props }) => {
  const { name } = useConfig(props);

  return <Module name={name} {...props}>{children}</Module>
}

List.Item = ({ config, context, icon, children }) => {
  // if (context.arrow && !icon) icon = config['arrow-icon'];

  return (
    <Component name='item' tag='li'>
      {icon && <SubComponent name='icon' tag='i' className={`fa fa-times`} />}
      {children}
    </Component>
  )
};

List.defaultProps = { config, styles }

export default List;