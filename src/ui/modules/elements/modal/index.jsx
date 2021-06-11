import React from 'react';

import config from './assets/config.js';
import styles from './assets/styles.js';

const Modal = ({ toggle, trigger, animate, onShow, onHide, ...props }) => {
  const { name, close, overlay } = useConfig(props);
  const [showModal, setShowModal] = useState(false);
  const { template } = useModuleContext();

  const toggleModal = (toggle) => {
    setShowModal(toggle);

    toggle ? onShow?.() : onHide?.();
  }

  React.useEffect(() => trigger?.current?.addEventListener('click', () => toggleModal(true)), []);

  React.useEffect(() => {
    const templateCallback = template?.Modal?.[showModal ? 'onShow' : 'onHide'];

    templateCallback?.(() => toggleModal(!showModal), overlay.dismissOnClick);
  }, [showModal]);

  return (
    <React.Fragment>
      <Module name={name} visible={showModal} toggleModal={toggleModal} {...props}>
        {close && <Modal.Close icon>{close.node}</Modal.Close>}

        <Component name='content'>{props.children}</Component>
      </Module>

      {React.isValidElement(trigger) && (
        <Module.Fragment onClick={() => toggleModal(true)}>{trigger}</Module.Fragment>
      )}

      {overlay?.component && (
        <overlay.component visible={showModal} onClick={overlay.dismissOnClick ? () => toggleModal(false) : null} />
      )}
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