import defaults from './accordion.json';
/**
 * Render Accordion module
 *
 * @param {Array}  props.panels
 */
export default class Accordion extends Synergize {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Module {...this.props}>
                {this.props.panels.map(({title, content, active}, index) => (
                    <Component modifiers={active ? ['active'] : false} name='section' key={index}>
                        <Component name='title' onClick={this.toggle}>
                            <Component name='toggle' className='fa fa-chevron-circle-down' /> {title}
                        </Component>
                        <Component name='content'>{content}</Component>
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