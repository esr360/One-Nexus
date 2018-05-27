import * as app from '../../../../app';

export default class _Modal extends React.Component {
    render() {
        return (
            <app.layouts.Base {...app.config.app.views}>

                <Module name='modal' before={target => <Button onClick={() => UI.modal(target()).show()}>Raw</Button>}>
                    <Component name='close' modifiers={['icon']}>×</Component>
                    <Component name='content'>
                        Raw Modal Content
                    </Component>
                </Module>

                <Modal trigger={ <div>Trigger 1</div> }>
                    <Modal.close modifiers={['icon']}>close</Modal.close>
                    <Modal.content>
                        Modal 1
                    </Modal.content>
                </Modal>

                <Modal trigger={ <div>Trigger 2</div> }>
                    Modal 2
                </Modal>

                <Modal trigger={ <div>Trigger 3</div> } content='Modal 3' />

                <Modal close={false} trigger={ <div>Trigger 4</div> }>
                    <Modal.close>close</Modal.close>
                    Modal 4
                </Modal>

                <Button id="demoTrigger">Modal Trigger</Button>
                <Modal trigger='#demoTrigger'>
                    Modal Content
                </Modal>

                <Modal close={false} animate='right' trigger={ <Button>Trigger</Button> }>Modal 3</Modal>

                <Button data-modal-content='foo'>Foo Trigger</Button>

                <Button data-modal-content='bar'>Bar Trigger</Button>

                <button class="button" data-modal-target="modal_1">Modal 1 Trigger</button>
                <div class="modal-animate-top" id="modal_1">
                    <div class="modal_close"><i class="fa fa-times"></i></div>
                    <div class="modal_content">Modal 1</div>
                </div>

                <button class="button" data-modal-target="foo">Modal 2 Trigger</button>
                <div class="modal" id="foo">
                    <div class="modal_content">Modal 2</div>
                    <div class="modal_close">Close Modal</div>
                </div>

            </app.layouts.Base>
        )
    }
}