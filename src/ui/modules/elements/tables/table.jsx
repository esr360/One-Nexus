import defaults from './tables.json';

/**
 * Render Table module
 *
 * @prop {String} name
 */
export default class Table extends React.Component {
    render() {
        let modifiers = this.props.modifiers || [];

        if (this.props.small) modifiers.push('small');

        return (
            <Module tag='table' name={this.props.name} modifiers={modifiers} className={this.props.className}>
                <thead>
                    {this.props.content.map((data, index) => (
                        Object.keys(data).map(heading => <th>{heading}</th>)
                    ))}
                </thead>
                <tbody>
                    {this.props.content.map((data, index) => (
                        <tr>{Object.values(data).map(cell => <td>{cell}</td>)}</tr>
                    ))}      
                </tbody>  
            </Module>
        )
    }
}

Table.defaultProps = {
    name: defaults['tables'].name
};