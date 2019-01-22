import defaults from './assets/config';
import layout from './assets/layout.js';

/**
 * Render Table module
 *
 * @prop {Array} name
 */
const Table = ({ columns, data, ...props }) => (
    <Module {...props}>
        {columns.every(column => column.title) && (
            <Component name='thead'>
                <Component name='row' tag='tr'>
                    {columns.map(column => (
                        <Component name='heading' tag='th' key={column.key}>
                            {column.title}
                        </Component>
                    ))}
                </Component>
            </Component>
        )}

        <Component name='tbody'>
            {data.map(row => (
                <Component name='row' tag='tr' key={row.key}>
                    {columns.map(column => (
                        <Component name='cell' tag='td' key={column.key}>
                            {Object.keys(row).map(cell => {
                                if (cell === column.key) {
                                    return row[cell];
                                }
                            })}

                            {column.render && column.render()}
                        </Component>
                    ))}
                </Component>
            ))}
        </Component>
    </Module>
);

export default Object.assign(Table, {
    layout, defaults, defaultProps: {
        name: 'Table',
        fixed: true
    }
});