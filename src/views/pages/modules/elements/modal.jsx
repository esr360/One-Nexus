const Modals = ({ layouts, ...props }) => {
  const [showModal, setShowModal] = useState(false);
  const modalTrigger = React.useRef();

  return (
    <layouts.base {...props.config.views}>
      <>
        <div onClick={() => setShowModal(true)}>Hello please click me</div>
        <div onClick={() => setShowModal(true)}>Multiple triggers solved!</div>

        <Modal visible={showModal} onHide={() => setShowModal(false)}>
          Brip shop, dobiddy bee bow
        </Modal>
      </>

      <br />

      <>
        <div ref={modalTrigger}>Hello please click me</div>

        <Modal trigger={modalTrigger} animate='top'>
          Hello do I show with top animation?
        </Modal>
      </>

      <br />

      <Modal overlay={{ closeOnClick: false }} animate='bottom' trigger={<div>Trigger 1</div>}>
        Modal 1 with bottom animation and no overlay click close
      </Modal>

      <br />

      <Modal trigger={<div>Trigger 2</div>} close={false} animate={false}>
          <Modal.Close>close</Modal.Close>

          Modal 2 with custom close and no animation
      </Modal>

      <br />

      <Modal trigger={<div>Trigger 3</div>} render='Modal 3' />

      <br />

      <Modal close={false} animate='right' trigger={<Button>Trigger</Button>}>
          Modal 3
      </Modal>
    </layouts.base>
  );
}

export default Modals;