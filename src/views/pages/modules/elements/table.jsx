import Base from '../../../layouts/base';

const columns = [
    { title: 'Name', key:'name' }, 
    { title: 'Age', key:'age' }, 
    { title: 'Address', key:'address' }, 
    { title: 'Operations', key:'operations', render: () => <a href='#'>Delete</a> }
];

const data = [
    { name: 'Jack', age: 28, address: 'some where' },
    { name: 'Rose', age: 36, address: 'some where' }
];

export default props => (
    <Base {...props.config.views}>
        <Table columns={columns} data={data} />
    </Base>
);