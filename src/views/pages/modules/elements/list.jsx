import Base from '../../../layouts/base';

export default props => (
    <Base {...props.config.app.views}>

        <Module name='foo'>
            <Component name='bar'>
                <SubComponent name='fizz'>
                    <SubComponent onClick={() => console.log('foo')} name='buzz'>
                        <SubComponent name='ting'>
                            <SubComponent name='tong'>Ting</SubComponent>
                        </SubComponent>
                    </SubComponent>
                </SubComponent>
            </Component>
        </Module>

        <List reset>
            <List.Item>Foo</List.Item>
            <List.Item>Foo</List.Item>
            <List.Item>Foo</List.Item>
        </List>

        <List reset inline>
            <List.Item>Foo</List.Item>
            <List.Item icon='chevron-circle-up'>Foo</List.Item>
            <List.Item>Foo</List.Item>
        </List>

        <List reset divider>
            <List.Item>Foo</List.Item>
            <List.Item>Foo</List.Item>
            <List.Item>Foo</List.Item>
        </List>

        <List arrow>
            <List.Item icon='chevron-circle-up'>Foo</List.Item>
            <List.Item>Foo</List.Item>
            <List.Item>Foo</List.Item>
        </List>

        <List arrow highlight>
            <List.Item>Foo</List.Item>
            <List.Item>Foo</List.Item>
            <List.Item>Foo</List.Item>
        </List>

        <List clear group>
            <List.Item>Foo</List.Item>
            <List.Item>Foo</List.Item>
            <List.Item>Foo</List.Item>
        </List>

    </Base>
);