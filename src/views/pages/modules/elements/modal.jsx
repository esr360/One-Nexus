import Base from '../../../layouts/base';

export default props => (
    <Base {...props.config.app.views}>
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
            Modal 2
        </Modal>

        <Modal trigger={ <div>Trigger 3</div> } content='Modal 3' />

        <Button id="demoTrigger">Modal Trigger</Button>
        <Modal trigger='#demoTrigger'>
            Modal Content
        </Modal>

        <Modal close={false} animate='right' trigger={ <Button>Trigger</Button> }>Modal 3</Modal>

    </Base>
);