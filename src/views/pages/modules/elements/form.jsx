import * as app from '../../../../app';

export default class Form extends React.Component {
    render() {
        return (
            <app.layouts.Base {...app.config.app.views}>

                <div class="row object">
                    <div class="span-6">

                        <app.Form inputs={[
                            {
                                type: 'text',
                                name: 'fizzBuzz',
                                label: 'Username',
                                placeholder: 'E.g. SkyUX',
                                icon: 'user',
                                validate: true
                            },
                            {
                                type: 'password',
                                label: 'Password',
                                placeholder: '••••••••',
                                icon: 'key',
                                validate: true
                            },
                            {
                                type: 'textarea',
                                placeholder: 'Enter your message...'
                            },
                            {
                                type: 'submit',
                                text: 'Submit'
                            }
                        ]} />

                        <form class="form">
                            <div class="form_group">
                                <label class="form_label">Your Name</label>
                                <input class="form_input" type="text" placeholder="E.g. John Doe" />
                            </div>
                            <div class="form_group">
                                <label class="form_label">Your Message</label>
                                <textarea class="form_input" placeholder="Enter your message..."></textarea>
                            </div>
                            <button class="button" type="submit">Submit</button>
                        </form>

                        <form class="form">
                            <div class="form_group-validate">
                                <input required type="text" class="form_input" placeholder="E.g. John Doe" />
                                <label class="form_label">Your Name</label>
                            </div>
                            <div class="form_group-validate">
                                <textarea required class="form_input" placeholder="Enter your message..."></textarea>
                                <label class="form_label">Your Message</label>
                            </div>
                            <button type="submit" class="button">Submit</button>
                        </form>

                        <form class="form">
                            <label class="form_label">Username</label>
                            <div class="form_group-has-icon">
                                <input type="text" class="form_input" placeholder="Ex: SkyUX" />
                                <i class="form_icon fa fa-user"></i>
                            </div>
                        </form>

                        <form class="form">
                            <div class="form_group-compound-has-icon">
                                <input type="text" class="form_input" placeholder="Username" />
                                <i class="form_icon fa fa-user"></i>
                            </div>
                            <div class="form_group-compound-has-icon">
                                <input type="password" class="form_input" placeholder="••••••••" />
                                <i class="form_icon fa fa-key"></i>
                            </div>
                            <button type="submit" class="button">Submit</button>
                        </form>
                    </div>
                </div>

            </app.layouts.Base>
        )
    }
}