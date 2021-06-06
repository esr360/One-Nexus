import React from 'react';

import config from './assets/config.js';
import styles from './assets/styles.js';

const ModalContext = React.createContext({});

const Modal = ({ toggle, trigger, animate, ...props }) => {
  const { name, close = true } = useConfig(props);
  const { page } = useModuleContext();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = (toggle) => {
    setShowModal(toggle);

    page.setShowOverlay({
      showOverlay: toggle,
      onOverlayClick: () => setShowModal(false)
    });
  }

  return (
    <ModalContext.Provider value={{ toggleModal }}>
      <Module name={name} visible={showModal} {...props}>
        {close && (
          <Modal.Close>
            <Icon glyph="times" />
          </Modal.Close>
        )}

        <Component name='content'>{props.children}</Component>
      </Module>

      {trigger && <div onClick={() => toggleModal(true)}>{trigger}</div>};
    </ModalContext.Provider>
  );
}

Modal.Close = props => {
  const { toggleModal } = React.useContext(ModalContext);

  return (
    <Component name='close' {...props} onClick={() => toggleModal(false)}>
      {props.children}
    </Component>  
  );
}

Modal.defaultProps = { config, styles }

export default Modal;