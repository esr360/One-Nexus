import * as UI from '../../../ui';
import * as $accordion from './accordion';
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
        console.log($accordion.toggle)
        console.log(global.UI.accordion().toggle)
        return (
            <Module {...this.props}>
                {this.props.panels.map(({title, content}, index) => (
                    <Component name="section" key={index}>
                        <Component name="title" onClick={$accordion.toggle}>
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