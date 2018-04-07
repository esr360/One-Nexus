import * as app from '../../../../app';

export default class Form extends React.Component {
    render() {
        return (
            <app.layouts.Base {...app.config.app.views}>

                <div className="row object">
                    <div className="span-6">

                        <app.Form fields={[
                            {
                                type: 'fieldset',
                                legend: 'Login',
                                // legend: {
                                //     title: 'Fieldset Legend',
                                //     class: 'heading-size-5'
                                // },
                                fields: [
                                    {
                                        type: 'text',
                                        id: 'userName',
                                        name: 'fooBar',
                                        label: 'Foo Bar',
                                        placeholder: 'fooBar',
                                        modifiers: ['foo']
                                    },
                                    {
                                        type: 'password',
                                        id: 'userPassword',
                                        label: 'Password',
                                        placeholder: '••••••••',
                                        icon: 'key'
                                    }
                                ]
                            },
                            {
                                type: 'text',
                                id: 'fizzBuzz',
                                name: 'fizzBuzz',
                                label: 'Username',
                                placeholder: 'E.g. SkyUX',
                                icon: 'user',
                                required: true,
                                validate: [
                                    {
                                        rule: field => field.value.length > 3,
                                        message: 'Must be more than 3 characters'
                                    },
                                    //field => field.value.length > 3
                                ]
                            },
                            {
                                type: 'checkbox',
                                label: 'IdForSomeOtherCheckbox',
                                id: 'IdForSomeOtherCheckbox',
                                fieldset: {
                                    legend: 'Ting tong',
                                    id: 'tingTong',
                                    fields: [
                                        {
                                            type: 'HTML',
                                            id: 'customrender1',
                                            render: <app.Alert>Custom render 1</app.Alert>,
                                            rules: [
                                                userPassword => userPassword.value === 'foo'
                                            ]
                                        }
                                    ],
                                    rules: [
                                        IdForSomeOtherCheckbox => IdForSomeOtherCheckbox.checked
                                    ]
                                }
                            },
                            {
                                type: 'HTML',
                                id: 'customrender2',
                                render: <app.Alert>Custom render 2</app.Alert>,
                                rules: [
                                    IdForSomeOtherCheckbox => IdForSomeOtherCheckbox.checked,
                                ]
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

                        <Module name='form'>
                            <Component name='group' tag='fieldset'>
                                <Component name='legend' className='heading-size-4'>Fieldset Legend</Component>
                                <Component name='group'>
                                    <Component name='label'>Field Label</Component>
                                    <Component name='input' placeholder='Field input' required />
                                </Component>
                                <Component name='group'>
                                    <Component name='label'>Textarea Label</Component>
                                    <Component name='input' tag='textarea' placeholder='Field textarea' />
                                </Component>
                            </Component>

                            <Component name='group' tag='fieldset'>
                                <Component name='legend' className='heading-size-4'>Fieldset Legend</Component>
                                <Component name='group'>
                                    <Component name='label'>Field Label</Component>
                                    <Component name='input' placeholder='Field input' required />
                                </Component>
                                <Component name='group'>
                                    <Component name='label'>Textarea Label</Component>
                                    <Component name='input' tag='textarea' placeholder='Field textarea' />
                                </Component>
                            </Component>

                            <Component name='submit' type='submit' tag='input' className='button' value='Submit button' />
                        </Module>

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