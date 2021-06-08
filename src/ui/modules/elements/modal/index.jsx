import React from 'react';

import config from './assets/config.js';
import styles from './assets/styles.js';

const Modal = ({ toggle, trigger, animate, onShow, onHide, ...props }) => {
  const { name, close = true, ...config } = useConfig(props);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = (toggle) => {
    setShowModal(toggle);

    if (toggle) {
      // onShow?.();
      config.onShow?.(setShowModal, onHide);
    } else {
      // onHide?.();
      config.onHide?.(onHide);
    }
  }

  return (
    <React.Fragment>
      <Module name={name} visible={showModal} toggleModal={toggleModal} {...props}>
        {close && <Modal.Close><Icon glyph="times" /></Modal.Close>}

        <Component name='content'>{props.children}</Component>
      </Module>

      {trigger && <div onClick={() => toggleModal(true)}>{trigger}</div>};
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