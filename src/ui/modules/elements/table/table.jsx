import defaults from './table.json';

/**
 * Render Table module
 *
 * @prop {Array} name
 */
const Table = ({ content, ...props }) => {
    const config = Object.assign(defaults.table, window.theme.table);

    return (
        <Module name={config.name} {...props}>
            <thead>
                <tr>
                    {content.map((data, index) => (
                        Object.keys(data).map((heading, index) => <th key={index}>{heading}</th>)
                    ))}
                </tr>
            </thead>
            <tbody>
                {content.map((data, index) => (
                    <tr key={index}>
                        {Object.values(data).map((cell, index) => <td key={index}>{cell}</td>)}
                    </tr>
                ))}      
            </tbody>  
        </Module>
    );
}

Table.defaultProps = {
    tag: 'table'
};

export default Table;