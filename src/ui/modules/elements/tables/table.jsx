import defaults from './tables.json';

/**
 * Render Table module
 *
 * @prop {String} name
 */
const Table = props => {
    const config = Object.assign(defaults.tables, window.theme.table);

    return (
        <Module name={config.name} {...props}>
            <thead>
                <tr>
                    {props.content.map((data, index) => (
                        Object.keys(data).map((heading, index) => <th key={index}>{heading}</th>)
                    ))}
                </tr>
            </thead>
            <tbody>
                {props.content.map((data, index) => (
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