import config from './assets/config.js';
import styles from './assets/styles.js';

const Modal = ({ toggle, trigger, onShow, onHide, visible, ...props }) => {
  const { name, close, overlay, animate } = useConfig(props);
  const [showModal, setShowModal] = useState(false);
  const { template } = useModuleContext();

  const isVisible = visible || showModal;

  const toggleModal = toggle => (setShowModal(toggle), toggle ? onShow?.() : onHide?.());

  React.useEffect(() => {
    trigger?.current?.addEventListener('click', () => toggleModal(true));
  }, []);

  React.useEffect(() => {
    const templateCallback = template?.Modal?.[isVisible ? 'onShow' : 'onHide'];

    templateCallback?.(() => toggleModal(!isVisible), overlay.closeOnClick);
  }, [isVisible]);

  const modifiers = { [`animate-${animate}`]: Boolean(animate) };

  return (
    <React.Fragment>
      <Module name={name} visible={isVisible} toggleModal={toggleModal} {...modifiers} {...props}>
        {close && <Modal.Close icon>{close.node}</Modal.Close>}

        <Component name='content'>{props.children}</Component>
      </Module>

      {React.isValidElement(trigger) && (
        <Module.Fragment onClick={() => toggleModal(true)}>{trigger}</Module.Fragment>
      )}

      {overlay.component && (
        <overlay.component {...Module.props(overlay)} visible={isVisible} onClick={() => toggleModal(false)} />
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