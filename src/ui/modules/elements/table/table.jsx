import defaults from './table.json';
import RCTable from 'rc-table';

/**
 * Render Table module
 *
 * @prop {Array} name
 */
const Table = ({ columns, data, ...props }) => {
    const config = Object.assign(defaults.table, window.theme.table);

    return (
        <Module component={RCTable} componentProps={{ columns, data }} name={config.name} {...props}  />
    );
}

Table.defaultProps = {
    tag: 'div',
    fixed: true
};

export default Table;