import React from 'react';

import config from './assets/config.js';
import styles from './assets/styles.js';

const ListContext = React.createContext({});

const List = ({ children, ...props }) => {
  const { name, ...config } = useConfig(props);

  return (
    <ListContext.Provider value={{ ...props, ...config }}>
      <Module name={name} {...props}>{children}</Module>
    </ListContext.Provider>
  )
}

List.Item = ({ icon, children }) => {
  const { arrow, arrowIcon } = React.useContext(ListContext);

  return (
    <Component name='item' tag='li'>
      {(icon || arrow) && <SubComponent name='icon' render={icon || arrowIcon} />}
      {children}
    </Component>
  )
};

List.defaultProps = { config, styles }

export default List;