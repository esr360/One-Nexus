import * as app from '../../app';
import Base from '../layouts/base';

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

const Index = props => (
    <Base {...props.config.app.views}>

        <PAX5.row stack='breakpoint-3'>
            <PAX5.column>Column</PAX5.column>
            <PAX5.column>Column</PAX5.column>
            <PAX5.column>Column</PAX5.column>
        </PAX5.row>

        <PAX5.row>
            <PAX5.column width={4}>Column</PAX5.column>
            <PAX5.column width={6}>Column</PAX5.column>
            <PAX5.column width={2}>Column</PAX5.column>
        </PAX5.row>

        <PAX5.row>
            <PAX5.column width={{
                'breakpoint-1': [1,2], 
                'breakpoint-2': [1,3], 
                'breakpoint-3': [1,4]
            }}>Column</PAX5.column>
            <PAX5.column width={{
                'breakpoint-1': [1,2], 
                'breakpoint-2': [1,3], 
                'breakpoint-3': [1,4]
            }}>Column</PAX5.column>
            <PAX5.column width={{
                'breakpoint-1': [1,2], 
                'breakpoint-2': [1,3], 
                'breakpoint-3': [1,4]
            }}>Column</PAX5.column>
            <PAX5.column width={{
                'breakpoint-1': [1,2], 
                'breakpoint-2': [1,3], 
                'breakpoint-3': [1,4]
            }}>Column</PAX5.column>
        </PAX5.row>

        <PAX5.row>
            <PAX5.column breakpoint-1={[1,2]} breakpoint-2={[1,3]} breakpoint-3={[1,4]}>Column 1</PAX5.column>
            <PAX5.column breakpoint-1={[1,2]} breakpoint-2={[1,3]} breakpoint-3={[1,4]}>Column 1</PAX5.column>
            <PAX5.column breakpoint-1={[1,2]} breakpoint-2={[1,3]} breakpoint-3={[1,4]}>Column 1</PAX5.column>
            <PAX5.column breakpoint-1={[1,2]} breakpoint-2={[1,3]} breakpoint-3={[1,4]}>Column 1</PAX5.column>
        </PAX5.row>

        <PAX5.row>
            <PAX5.column width={6} push={6}>Column 1</PAX5.column>
            <PAX5.column width={6} pull={6}>Column 2</PAX5.column>
        </PAX5.row>

        <PAX5.row>
            <PAX5.column width={2}>Column 1</PAX5.column>
            <PAX5.column width={4}>Column 2</PAX5.column>
            <PAX5.column width={3} pull={3}>Column 3</PAX5.column>
        </PAX5.row>

        <PAX5.row>
            <PAX5.column width={2}>Column 1</PAX5.column>
            <PAX5.column width={4}>Column 2</PAX5.column>
            <PAX5.column width={6}>Column 3</PAX5.column>
            <PAX5.column width={2}>Column 4</PAX5.column>
            <PAX5.column width={4}>Column 5</PAX5.column>
            <PAX5.column width={6}>Column 6</PAX5.column>
        </PAX5.row>

        <PAX5.row no-gutter>
            <PAX5.column>Column</PAX5.column>
            <PAX5.column>Column</PAX5.column>
            <PAX5.column>Column</PAX5.column>
            <PAX5.column>Column</PAX5.column>
            <PAX5.column>Column</PAX5.column>
            <PAX5.column>Column</PAX5.column>
        </PAX5.row>

        <PAX5 columns={[<div>foo</div>, 'bar', <Alert>Alert Column</Alert>]} />

        <PAX5 column-width={{
            'breakpoint-1': [1,2], 
            'breakpoint-2': [1,3], 
            'breakpoint-3': [1,4]
        }} columns={[<div>foo</div>, 'bar', <Alert>Alert Column</Alert>]} />

        <PAX5.row>
            <PAX5.column>
                <div className='foo'>foo</div>
            </PAX5.column>

            <PAX5.column>bar</PAX5.column>

            <PAX5.column>
                <Alert>Alert Column</Alert>
            </PAX5.column>
        </PAX5.row>


        {/**/}

    
        <Accordion Alert large panels={panels} />

        <Alert close={true}>This is a default alert</Alert>

        <Blockquote Alert='foo' content='Lorem ipsum dolor sit amet' />

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
    </Base>
);

export default Index;