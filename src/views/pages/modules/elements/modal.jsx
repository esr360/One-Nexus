import * as app from '../../../../app';

export default class Modal extends React.Component {
    render() {
        return (
            <app.layouts.Base {...app.config.app.views}>

                <div id="demoTrigger" className='button'>Demo Trigger</div>
                <app.Modal animate-top trigger='demoTrigger'>Modal 1</app.Modal>

                <app.Modal animate-bottom trigger={<div>Trigger</div>}>Modal 2</app.Modal>

                <app.Modal animate-bottom trigger={<app.Button>Trigger</app.Button>}>Modal 3</app.Modal>

                <button class="button" data-modal-target="modal_1">Modal 1 Trigger</button>
                <button class="button" data-modal-target="foo">Modal 2 Trigger</button>

                <div class="modal-animate-top" id="modal_1">
                    <div class="modal_close"><i class="fa fa-times"></i></div>
                    <div class="modal_content">Modal 1</div>
                </div>

                <div class="modal" id="foo">
                    <div class="modal_content">Modal 2</div>
                    <div class="modal_close">Close Modal</div>
                </div>

            </app.layouts.Base>
        )
    }
}