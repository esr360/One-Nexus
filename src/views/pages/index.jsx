import * as app from '../../app';

const panels = [
    {title: 'foo', content: 'bar'},
    {title: 'fizz', content: 'buzz'},
];

const columns = [
    { title: 'Name', dataIndex: 'name', key:'name' }, 
    { title: 'Age', dataIndex: 'age', key:'age' }, 
    { title: 'Address', dataIndex: 'address', key:'address' }, 
    { title: 'Operations', dataIndex: '', key:'operations', render: () => <a href='#'>Delete</a> }
];

const data = [
    { name: 'Jack', age: 28, address: 'some where', key:'1' },
    { name: 'Rose', age: 36, address: 'some where', key:'2' }
];

function dismiss(event) {
    console.log(event);
}

const Index = () => (
    <app.layouts.Base {...app.config.app.views}>
    
        <Accordion large panels={panels} />

        <Alert close={true}>This is a default alert</Alert>

        <Blockquote content='Lorem ipsum dolor sit amet' />

        <Button>Button</Button>

        <Carousel id="jizz" slides={[
            <img src="https://picsum.photos/640/480" />,
            <img src="https://picsum.photos/640/480" />,
            <img src="https://picsum.photos/640/480" />
        ]} />

        <Module name='modal' before={target => <Button onClick={() => Modal.toggle(target())}>Open Modal</Button>}>
            <Component name='close' modifiers={['icon']}>×</Component>
            <Component name='content'>
                Modal Content
            </Component>
        </Module>

        <Form fields={[
            {
                type: 'text',
                label: 'Username',
                id: 'username1',
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
                id: 'userPassword1',
                required: true,
                validate: [
                    {
                        rule: field => field.value.length > 8,
                        message: 'Must be more than 8 characters'
                    }
                ]
            }
        ]} validate={(field, rules) => {
            rules.forEach(rule => {
                if (!rule.rule(document.getElementById(field))) {
                    console.log(rule.message);
                }
            });
        }} />

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

        <ProgressBar max={100} value={50} text='Almost there...' />

        <Table columns={columns} data={data} />

        <Tabs content={{ glue: true }} data={[
            {title: <div><div>foo</div></div>, content: 'bar', active: true},
            {title: 'fizz', content: 'buzz'}
        ]} />

        <Tabs nav={{ full: true }} data={[
            {title: 'foo', content: 'bar', active: true},
            {title: 'fizz', content: 'buzz'}
        ]} />

        <Well>
            <Tooltip inline right content='tooltip content'>Tooltip</Tooltip>
        </Well>

        <Well>Well</Well>

        <Component module='searchBox' name='show'>Search Toggle</Component>

        <Component module='sideNav' name='toggle'>SideNav Toggle</Component>

        <Billboard>Billboard</Billboard>

        <Accordion foo panels={panels} toggle={event => {
            console.log(event)
        }} />

        <Form fields={[
            {
                type: 'text',
                label: 'Username'
            },
            {
                type: 'password',
                label: 'Password'
            }
        ]} />

        <Carousel slides={[
            <img src="https://picsum.photos/640/480" />,
            <img src="https://picsum.photos/640/480" />,
            <img src="https://picsum.photos/640/480" />
        ]} init={event => {
            console.log(event);
        }} />

        <Alert close dismiss={event => dismiss(event.target)}>...</Alert>

        <Breadcrumb>
            <Breadcrumb.Item>Level 1</Breadcrumb.Item>
            <Breadcrumb.Item>Level 2</Breadcrumb.Item>
            <Breadcrumb.Item>Level 3</Breadcrumb.Item>
        </Breadcrumb>
    </app.layouts.Base>
);

export default Index;