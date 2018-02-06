import defaults from './tables.json';

/**
 * Render Table module
 *
 * @prop {String} name
 */
export default class Table extends React.Component {
    render() {
        return (
            <Module {...this.props}>
                <thead>
                    <tr>
                        {this.props.content.map((data, index) => (
                            Object.keys(data).map((heading, index) => <th key={index}>{heading}</th>)
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {this.props.content.map((data, index) => (
                        <tr key={index}>
                            {Object.values(data).map((cell, index) => <td key={index}>{cell}</td>)}
                        </tr>
                    ))}      
                </tbody>  
            </Module>
        )
    }
}

Table.defaultProps = {
    name: defaults.tables.name,
    tag: 'table'
};