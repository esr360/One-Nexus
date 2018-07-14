import * as app from '../../app';

const panels = [
    {title: 'foo', content: 'bar'},
    {title: 'fizz', content: 'buzz'},
];

const Index = () => (
    <app.layouts.Base {...app.config.app.views}>
        <Accordion panels={panels} />

        <Alert>This is a default alert</Alert>

        <Blockquote content='Lorem ipsum dolor sit amet' />

        <Button>Button</Button>

        <Carousel slides={[
            <img src="https://picsum.photos/640/480" />,
            <img src="https://picsum.photos/640/480" />,
            <img src="https://picsum.photos/640/480" />
        ]} />

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
                                rule: field => field.value.length > 3,
                                message: 'Must be more than 3 characters'
                            }
                        ]
                    },
                    {
                        type: 'password',
                        label: 'Password',
                        icon: 'key',
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
            }
        ]} submit='Sign up' />

        <Heading size={4} heading={2}>Signup Form</Heading>

        <Image src="https://picsum.photos/650/480" />

        <Image center-xy src="https://picsum.photos/650/480" />

        <List reset>
            <List.Item>Foo</List.Item>
            <List.Item>Foo</List.Item>
            <List.Item>Foo</List.Item>
        </List>

        <Modal trigger={ <div>Modal Trigger</div> }>
            Modal
        </Modal>

        <Paragraph>Paragraph</Paragraph>

        <ProgressBar max={100} value={50} />

        <Table content={[{
            default: 'true',
            type: 'Bool'
        }]} />

        <Tabs tabs={[
            {title: <div><div>foo</div></div>, content: 'bar', active: true},
            {title: 'fizz', content: 'buzz'}
        ]} />

        <p>
            <Tooltip inline right>Tooltip</Tooltip>
        </p>

        <Well>Well</Well>
    </app.layouts.Base>
);

export default Index;