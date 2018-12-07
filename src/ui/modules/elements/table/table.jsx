import defaults from './assets/config';
import layout from './assets/layout.jss';

/**
 * Render Table module
 *
 * @prop {Array} name
 */
const Table = ({ columns, data, ...props }) => {
    return (
        <Module {...props}>
            <thead>
                <tr>
                    {columns.map(column => (
                        <th key={column.key}>{column.title}</th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {data.map(row => (
                    <tr key={row.key}>
                        {columns.map(column => (
                            <td key={column.key}>
                                {Object.keys(row).map(cell => {
                                    if (cell === column.key) {
                                        return row[cell];
                                    }
                                })}

                                {column.render && column.render()}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </Module>
    );
}

export default Object.assign(Table, {
    layout, defaults, defaultProps: {
        name: 'Table',
        fixed: true
    }
});