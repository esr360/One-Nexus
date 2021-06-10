import React from 'react';

import config from './assets/config.js';
import styles from './assets/styles.js';

const Modal = ({ toggle, trigger, animate, onShow, onHide, ...props }) => {
  const { name, closeOnOverlayClick, close } = useConfig(props);
  const [showModal, setShowModal] = useState(false);
  const { template } = useModuleContext();

  const toggleModal = (toggle) => {
    setShowModal(toggle);

    toggle ? onShow?.() : onHide?.();

    template?.Modal?.[toggle ? 'onShow' : 'onHide']?.(() => {
      setShowModal(false), onHide?.();
    }, closeOnOverlayClick)
  }

  return (
    <React.Fragment>
      <Module name={name} visible={showModal} toggleModal={toggleModal} {...props}>
        {close && <Modal.Close icon>{close.component}</Modal.Close>}

        <Component name='content'>{props.children}</Component>
      </Module>

      {trigger && <Module.Fragment onClick={() => toggleModal(true)}>{trigger}</Module.Fragment>};
    </React.Fragment>
  );
}

Modal.Close = props => {
  const { Modal: { toggleModal } } = useModuleContext();

  return (
    <Component name='close' {...props} onClick={() => toggleModal(false)}>
      {props.children}
    </Component>  
  );
}

Modal.defaultProps = { config, styles }

export default Modal;