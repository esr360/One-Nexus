import Base from '../../../layouts/base';

export default props => (
    <Base {...props.config.app.views}>
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