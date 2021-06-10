const Modals = ({ layouts, ...props }) => {
  const [showModal, setShowModal] = useState(false);
  const trigger1 = React.useRef();

  return (
    <layouts.base {...props.config.views}>
        {/* <Modal trigger={ <div>Trigger 1</div> }>
            <Modal.close modifiers={['icon']}>close</Modal.close>
            <Modal.content>
                Modal 1
            </Modal.content>
        </Modal>

        <Modal close={false} trigger={ <div>Trigger 4</div> }>
            <Modal.close>close</Modal.close>
            Modal 4
        </Modal> */}

        <>
          <div ref={trigger1}>Hello please click me</div>

          <Modal trigger={trigger1}>
            Hello do I show?
        </Modal>
        </>

        <Modal trigger={<div>Trigger 1</div>}>
          Modal 1
        </Modal>

        <Modal trigger={<div>Trigger 2</div>} close={false} onHide={() => console.log('yeahhh bwoiiii')}>
            <Modal.Close>close</Modal.Close>
            Modal 2
        </Modal>

        <Modal trigger={<div>Trigger 3</div>} content='Modal 3' />

        <Modal close={false} animate='right' trigger={<Button>Trigger</Button>}>
            Modal 3
        </Modal>
    </layouts.base>
  );
}

export default Modals;