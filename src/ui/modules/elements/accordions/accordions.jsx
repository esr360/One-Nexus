import defaults from './accordions.json';

/**
 * Render Accordion component
 *
 * @param {String} props.name
 * @param {Array}  props.panels
 * @param {Array}  props.modifiers
 */
export const Accordion = ({name = defaults.accordions.name, panels, modifiers}) => (
    <Module name={name} modifiers={modifiers}>
        {panels.map(({title, content}, index) => (
            <Component name="section" key={index}>
                <Component name="title" modifiers={['fizz', 'buzz']}>{title}</Component>
                <Component name="content">{content}</Component>
            </Component>
        ))}
    </Module>
);