import * as app from '../../../../app';

const panels = [
    {title: 'foo', content: 'bar'},
    {title: 'fizz', content: 'buzz'},
];

export default class Accordions extends React.Component {
    render() {
        return (
            <app.layouts.Base {...app.config.app.views}>
                <app.Accordion panels={panels} />
                <app.Accordion panels={panels} modifiers={['foo', 'keepOpen']} />


                <div class="accordion object" data-module="accordion">
                    <div class="accordion_section" data-module="accordion">
                        <div class="accordion_title">
                            <div class="accordion_toggle fa fa-chevron-circle-down"></div> foo 
                        </div>
                        <div class="accordion_content">
                            <div class="accordion object" data-module="accordion">
                                <div class="accordion_section" data-module="accordion">
                                    <div class="accordion_title">
                                        <div class="accordion_toggle fa fa-chevron-circle-down"></div> foo 
                                    </div>
                                    <div class="accordion_content">
                                        <div class="accordion object" data-module="accordion">
                                            <div class="accordion_section" data-module="accordion">
                                                <div class="accordion_title">
                                                    <div class="accordion_toggle fa fa-chevron-circle-down"></div> foo 
                                                </div>
                                                <div class="accordion_content">bar</div>
                                            </div>
                                            <div class="accordion_section" data-module="accordion">
                                                <div class="accordion_title" data-module="accordion">
                                                    <div class="accordion_toggle fa fa-chevron-circle-down"></div> fizz
                                                </div>
                                                <div class="accordion_content" data-module="accordion">buzz</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion_section" data-module="accordion">
                                    <div class="accordion_title" data-module="accordion">
                                        <div class="accordion_toggle fa fa-chevron-circle-down"></div> fizz
                                    </div>
                                    <div class="accordion_content" data-module="accordion">buzz</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion_section" data-module="accordion">
                        <div class="accordion_title" data-module="accordion">
                            <div class="accordion_toggle fa fa-chevron-circle-down"></div> fizz
                        </div>
                        <div class="accordion_content" data-module="accordion">buzz</div>
                    </div>
                </div>

            </app.layouts.Base>
        )
    }
}