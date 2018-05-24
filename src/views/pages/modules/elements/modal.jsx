import * as app from '../../../../app';

export default class Modal extends React.Component {
    render() {
        return (
            <app.layouts.Base {...app.config.app.views}>

                <Module name='modal' before={
                    <app.Button onClick={() => UI.modal(this.parent).open()}>Raw Modal</app.Button>
                }>
                    <Component name='close' icon onClick={() => UI.modal(this).close()}>×</Component>
                    <Component name='content'>
                        Raw Modal Content
                    </Component>
                </Module>

                <app.Modal trigger={ <div>Trigger 1</div> }>
                    <app.Modal.close modifiers={['icon']}>close</app.Modal.close>
                    <app.Modal.content>
                        Modal 1
                    </app.Modal.content>
                </app.Modal>

                <app.Modal trigger={ <div>Trigger 2</div> }>
                    Modal 2
                </app.Modal>

                <app.Modal trigger={ <div>Trigger 3</div> } content='Modal 3' />

                <app.Modal close={false} trigger={ <div>Trigger 4</div> }>
                    <app.Modal.close>close</app.Modal.close>
                    Modal 4
                </app.Modal>

                <app.Button id="demoTrigger">Modal Trigger</app.Button>
                <app.Modal trigger='#demoTrigger'>
                    Modal Content
                </app.Modal>

                <app.Modal close={false} animate='right' trigger={ <app.Button>Trigger</app.Button> }>Modal 3</app.Modal>

                <app.Button data-modal-content='foo'>Foo Trigger</app.Button>

                <app.Button data-modal-content='bar'>Bar Trigger</app.Button>

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