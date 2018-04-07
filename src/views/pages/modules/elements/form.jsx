import * as app from '../../../../app';

export default class Form extends React.Component {
    render() {
        return (
            <app.layouts.Base {...app.config.app.views}>

                <div className="row object">
                    <div className="span-6">

                        <app.Heading size='4' heading='2'>Signup Form</app.Heading>

                        <app.Form fields={[
                            {
                                type: 'text',
                                label: 'Username'
                            },
                            {
                                type: 'password',
                                label: 'Password'
                            }
                        ]} submit='Login' />

                        <app.Form fields={[
                            {
                                type: 'fieldset',
                                id: 'loginDetails',
                                legend: {
                                    title: 'Login Details',
                                    className: 'foo'
                                },
                                fields: [
                                    {
                                        type: 'text',
                                        label: 'Username',
                                        id: 'username',
                                        required: true,
                                        validate: [
                                            {
                                                rule: field => field.value.length > 3,
                                                message: 'Must be more than 3 characters'
                                            }
                                        ]
                                    },
                                    {
                                        type: 'password',
                                        label: 'Password',
                                        id: 'userPassword',
                                        required: true,
                                        validate: [
                                            {
                                                rule: field => field.value.length > 8,
                                                message: 'Must be more than 8 characters'
                                            }
                                        ]
                                    },
                                    {
                                        type: 'password',
                                        id: 'passwordReEnter',
                                        label: 'Re-enter Password',
                                        required: true,
                                        validate: [
                                            {
                                                rule: (userPassword, passwordReEnter) => {
                                                    return passwordReEnter.value === userPassword.value;
                                                },
                                                message: 'Passwords do not match'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'fieldset',
                                id: 'personalDetails',
                                legend: 'Personal Details',
                                fields: [
                                    {
                                        type: 'email',
                                        label: 'Email Address',
                                        required: true
                                    },
                                    {
                                        type: 'tel',
                                        label: 'Phone Number'
                                    },
                                    {
                                        type: 'checkbox',
                                        id: 'isHomeless',
                                        label: 'I\'m homeless'
                                    },
                                    {
                                        type: 'fieldset',
                                        legend: 'Address',
                                        id: 'address',
                                        fields: [
                                            {
                                                type: 'text',
                                                label: 'Address Line 1'
                                            },
                                            {
                                                type: 'text',
                                                label: 'Address Line 2'
                                            },
                                            {
                                                type: 'text',
                                                label: 'City'
                                            },
                                            {
                                                type: 'text',
                                                label: 'Postcode'
                                            }
                                        ],
                                        rules: [isHomeless => !isHomeless.checked]
                                    }
                                ]
                            },
                            {
                                type: 'checkbox',
                                id: 'freeSpam',
                                label: 'I would like to receive free spam',
                                after: {
                                    id: 'freeSpamAlert',
                                    className: 'object-small',
                                    render: <app.Alert>You will receive free spam</app.Alert>,
                                    rules: [freeSpam => freeSpam.checked]
                                }
                            }
                        ]} submit='Sign up' />

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