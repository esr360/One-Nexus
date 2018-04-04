import * as app from '../../../../app';

export default class Form extends React.Component {
    render() {
        return (
            <app.layouts.Base {...app.config.app.views}>

                <div className="row object">
                    <div className="span-6">

                        <app.Form fields={[
                            {
                                type: 'text',
                                id: 'userName',
                                name: 'fizzBuzz',
                                label: 'Username',
                                placeholder: 'E.g. SkyUX',
                                icon: 'user',
                                validation: [
                                    field => field.value.length > 3,
                                    //field => field.value.matches(validationQuery)
                                ]
                            },
                            {
                                type: 'password',
                                id: 'userPassword',
                                label: 'Password',
                                placeholder: '••••••••',
                                icon: 'key',
                                validate: true
                            },
                            {
                                type: 'checkbox',
                                label: 'IdForSomeOtherCheckbox',
                                id: 'IdForSomeOtherCheckbox'
                            },
                            {
                                type: 'textarea',
                                id: 'textarea',
                                placeholder: 'Enter your message...',
                                rules: [
                                    userPassword => userPassword.value !== 'foo',
                                    IdForSomeOtherCheckbox => IdForSomeOtherCheckbox.checked,
                                    (userName, userPassword) => (userName.value === userPassword.value)
                                ]
                            }
                        ]} submit='Login' />

                        <form className="form">
                            <div className="form_group">
                                <label className="form_label">Your Name</label>
                                <input className="form_input" type="text" placeholder="E.g. John Doe" />
                            </div>
                            <div className="form_group">
                                <label className="form_label">Your Message</label>
                                <textarea className="form_input" placeholder="Enter your message..."></textarea>
                            </div>
                            <button className="button" type="submit">Submit</button>
                        </form>

                        <form className="form">
                            <div className="form_group-validate">
                                <input required type="text" className="form_input" placeholder="E.g. John Doe" />
                                <label className="form_label">Your Name</label>
                            </div>
                            <div className="form_group-validate">
                                <textarea required className="form_input" placeholder="Enter your message..."></textarea>
                                <label className="form_label">Your Message</label>
                            </div>
                            <button type="submit" className="button">Submit</button>
                        </form>

                        <form className="form">
                            <label className="form_label">Username</label>
                            <div className="form_group-has-icon">
                                <input type="text" className="form_input" placeholder="Ex: SkyUX" />
                                <i className="form_icon fa fa-user"></i>
                            </div>
                        </form>

                        <form className="form">
                            <div className="form_group-compound-has-icon">
                                <input type="text" className="form_input" placeholder="Username" />
                                <i className="form_icon fa fa-user"></i>
                            </div>
                            <div className="form_group-compound-has-icon">
                                <input type="password" className="form_input" placeholder="••••••••" />
                                <i className="form_icon fa fa-key"></i>
                            </div>
                            <button type="submit" className="button">Submit</button>
                        </form>
                    </div>
                </div>

            </app.layouts.Base>
        )
    }
}