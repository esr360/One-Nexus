import Base from '../../../layouts/base';

export default props => (
    <Base {...props.config.views}>
        {/* <PAX5.row> */}
            {/* <PAX5.column width={6}> */}
                <Heading size='5' heading='2'>Signup Form</Heading>

                <Form fields={[
                  {
                    type: 'fieldset',
                    id: 'loginDetails',
                    legend: 'Login Details',
                    fields: [
                      // Username
                      {
                        type: 'text',
                        label: 'Username',
                        id: 'username',
                        icon: 'user',
                        required: true,
                        validators: [
                          {
                            rule: value => value.length > 3,
                            message: 'Must be more than 3 characters'
                          }
                        ]
                      },

                      // Password
                      {
                        type: 'password',
                        label: 'Password',
                        icon: 'key',
                        id: 'userPassword',
                        required: true,
                        validateOn: [],
                        validators: [
                          {
                            rule: value => value.length > 8,
                            message: 'Must be more than 8 characters'
                          }
                        ],
                        onValidation: ({}, { passwordReEnter, userPassword }) => {
                          if (passwordReEnter.value().length) {
                            passwordReEnter.validate({ userPassword });
                          }
                        },
                      },

                      // Password Re-Enter
                      {
                        type: 'password',
                        id: 'passwordReEnter',
                        label: 'Re-enter Password',
                        required: true,
                        validateOn: ['change'],
                        validators: [
                          {
                            rule: (value, { userPassword }) => value === userPassword.value(),
                            message: 'Passwords do not match'
                          }
                        ]
                      },

                      // Personal Details
                      {
                        type: 'fieldset',
                        id: 'personalDetails',
                        legend: 'Personal Details',
                        fields: [
                          {
                            type: 'email',
                            label: 'Email Address',
                            id: 'email',
                            required: true
                          },
                          {
                            type: 'tel',
                            label: 'Phone Number',
                            id: 'phoneNumber'
                          },
                          {
                            type: 'checkbox',
                            id: 'isHomeless',
                            label: 'I\'m homeless',
                            fieldset: {
                              type: 'fieldset',
                              legend: 'Address',
                              id: 'address',
                              fields: [
                                {
                                  type: 'text',
                                  label: 'Address Line 1',
                                  id: 'addressLine1'
                                },
                                {
                                  type: 'text',
                                  label: 'Address Line 2',
                                  id: 'addressLine2'
                                },
                                {
                                  type: 'text',
                                  label: 'City',
                                  id: 'addressCity'
                                },
                                {
                                  type: 'text',
                                  label: 'Postcode',
                                  id: 'addressPostcode'
                                }
                              ],
                              visibility: [
                                ({ isHomeless }) => !isHomeless.checked()
                              ]
                            }
                          },
                          {
                            type: 'select',
                            id: 'country',
                            label: 'Country',
                            required: true,
                            options: [
                              {
                                value: 'Choose your county',
                                selected: true,
                                disabled: true
                              },
                              { value: 'UK' },
                              { value: 'USA' }
                            ],
                            validators: [value => value === 'UK']
                          }
                        ]
                      }
                    ]
                  },

                  {
                      type: 'fieldset',
                      id: 'offers',
                      legend: 'Offers',
                      fields: [
                        {
                          type: 'checkbox',
                          id: 'freeSpam',
                          label: 'I would like to receive free spam',
                          after: {
                            id: 'freeSpamAlert',
                            hidden: true,
                            render: <Alert>You will receive free spam</Alert>,
                            visibility: [({ freeSpam }) => freeSpam.checked()]
                          }
                        },
                        {
                          type: 'checkbox',
                          id: 'freePizza',
                          label: 'I would like to receive a free large pizza',
                          after: {
                            id: 'freePizzaAlert',
                            hidden: true,
                            render: <Alert alert='info'>You will receive one large pizza</Alert>,
                            visibility: [({ freePizza }) => freePizza.checked()]
                          }
                        },
                        {
                          type: 'fieldset',
                          legend: 'Choose one:',
                          id: 'choose-one-x',
                          fields: [
                            {
                              type: 'radio',
                              id: 'freeXbox',
                              label: 'Free Xbox 360',
                              required: true
                            },
                            {
                              type: 'radio',
                              id: 'freePS4',
                              label: 'Free Playstation 4',
                              required: true
                            },
                            {
                              type: 'radio',
                              id: 'freeCheese',
                              label: 'Free slice of cheddar cheese',
                              required: true
                            },
                            {
                              type: 'radio',
                              id: 'giveUs10Bux',
                              label: 'You agree to give us $10',
                              required: true
                            }
                          ]
                        }
                      ],
                      rules: [country => country.value !== 'USA'],
                      after: {
                        id: 'freeBoth',
                        render: <Alert alert='help'>You want free spam and free pizza??</Alert>,
                        rules: [
                          freeSpam => freeSpam.checked,
                          freePizza => freePizza.checked
                        ]
                      }
                  },
                ]} submit='Ok lets go!' />
            {/* </PAX5.column> */}
        {/* </PAX5.row> */}
    </Base>
);