import Base from '../../../layouts/base';

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

export default props => (
    <Base {...props.config.app.views}>
        <Table columns={columns} data={data} />
    </Base>
);