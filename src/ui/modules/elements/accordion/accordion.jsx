import defaults from './accordion.json';

/**
 * Render Accordion component
 *
 * @param {String} props.name
 * @param {Array}  props.panels
 * @param {Array}  props.modifiers
 */
export default class Accordion extends React.Component {
    render() {
        return (
            <Module {...this.props}>
                {this.props.panels.map(({title, content}, index) => (
                    <Component name="section" key={index}>
                        <Component name="title">
                            <Component name="toggle" className="fa fa-chevron-circle-down" /> {title}
                        </Component>
                        <Component name="content">{content}</Component>
                    </Component>
                ))}
            </Module>
        )
    }
}

Accordion.defaultProps = {
    name: defaults.accordion.name,
    object: true
};