const Modals = ({ layouts, ...props }) => {
  const context = useModuleContext();

  console.log(context);

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

        <Modal trigger={ <div>Trigger 2</div> }>
            <Modal.Close icon>close</Modal.Close>
            Modal 2
        </Modal>

        <Modal trigger={ <div>Trigger 3</div> } content='Modal 3' />

        <Modal trigger='#demoTrigger'>
            Modal Content
        </Modal>
        <Button id="demoTrigger">Modal Trigger</Button>

        <Modal close={false} animate='right' trigger={ <Button>Trigger</Button> }>
            Modal 3
        </Modal>
    </layouts.base>
  );
}

export default Modals;