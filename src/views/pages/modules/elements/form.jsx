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
                    legend: {
                      title: 'Login Details'
                    },
                    fields: [
                      {
                        type: 'text',
                        label: 'Username',
                        id: 'username',
                        icon: 'user',
                        required: true,
                        validate: [
                          {
                            rule: ({ username }) => username.value.length > 3,
                            message: 'Must be more than 3 characters'
                          }
                        ]
                        // validators: [
                        //   {
                        //     rule: ({ current }) => current.value.length > 3,
                        //     message: 'Must be more than 3 characters'
                        //   }
                        // ]
                      },
                      {
                        type: 'password',
                        label: 'Password',
                        icon: 'key',
                        id: 'userPassword',
                        required: true,
                        tree: ['password'],
                        validate: [
                          {
                            rule: ({ userPassword }) => userPassword.value.length > 8,
                            message: 'Must be more than 8 characters'
                          }
                        ]
                      },
                      {
                        type: 'password',
                        id: 'passwordReEnter',
                        label: 'Re-enter Password',
                        required: true,
                        tree: ['password'],
                        validate: [
                          {
                            rule: ({ userPassword, passwordReEnter }) => {
                              return passwordReEnter.value === userPassword.value;
                            },
                            message: 'Passwords do not match'
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
                            id: 'email',
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
                            label: 'I\'m homeless',
                            groupProps: {
                              className: 'well-border'
                            },
                            fieldset: {
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
                              // rules: [isHomeless => !isHomeless.checked]
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
                            validate: [({ country }) => country.value === 'UK']
                          }
                        ]
                      }

                    ]
                  },

                  // {
                  //     type: 'fieldset',
                  //     id: 'offers',
                  //     legend: 'Offers',
                  //     fields: [
                  //         {
                  //             type: 'checkbox',
                  //             id: 'freeSpam',
                  //             label: 'I would like to receive free spam',
                  //             after: {
                  //                 id: 'freeSpamAlert',
                  //                 className: 'object-small',
                  //                 render: <Alert>You will receive free spam</Alert>,
                  //                 rules: [freeSpam => freeSpam.checked]
                  //             }
                  //         },
                  //         {
                  //             type: 'checkbox',
                  //             id: 'freePizza',
                  //             label: 'I would like to receive a free large pizza',
                  //             after: {
                  //                 id: 'freePizzaAlert',
                  //                 className: 'object-small',
                  //                 render: <Alert alert='info'>You will receive one large pizza</Alert>,
                  //                 rules: [freePizza => freePizza.checked]
                  //             }
                  //         },
                  //         {
                  //             type: 'fieldset',
                  //             legend: {
                  //                 title: 'Choose one:',
                  //                 className: 'heading-size-3'
                  //             },
                  //             fields: [
                  //                 {
                  //                     type: 'radio',
                  //                     name: 'choose-one',
                  //                     id: 'freeXbox',
                  //                     label: 'Free Xbox 360',
                  //                     required: true
                  //                 },
                  //                 {
                  //                     type: 'radio',
                  //                     name: 'choose-one',
                  //                     id: 'freePS4',
                  //                     label: 'Free Playstation 4',
                  //                     required: true
                  //                 },
                  //                 {
                  //                     type: 'radio',
                  //                     name: 'choose-one',
                  //                     id: 'freeCheese',
                  //                     label: 'Free slice of cheddar cheese',
                  //                     required: true
                  //                 },
                  //                 {
                  //                     type: 'radio',
                  //                     name: 'choose-one',
                  //                     id: 'giveUs10Bux',
                  //                     label: 'You agree to give us $10',
                  //                     required: true
                  //                 }
                  //             ]
                  //         }
                  //     ],
                  //     rules: [country => country.value !== 'USA'],
                  //     // @TODO see why this doesn't render
                  //     after: {
                  //         id: 'freeBoth',
                  //         className: 'object-small',
                  //         render: <Alert alert='help'>You want free spam and free pizza??</Alert>,
                  //         rules: [
                  //             freeSpam => freeSpam.checked,
                  //             freePizza => freePizza.checked
                  //         ]
                  //     }
                  // },
                ]} submit='Ok lets go!' />
            {/* </PAX5.column> */}
        {/* </PAX5.row> */}
    </Base>
);