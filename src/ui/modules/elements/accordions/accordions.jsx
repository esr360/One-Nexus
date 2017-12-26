import defaults from './accordions.json';

/**
 * Render Accordion component
 * 
 * @access public
 *
 * @param {Object} content
 */
export const Accordion = ({name = defaults.accordions.name, panels}) => (
    <Module name={name}>
        {panels.map(({title, content}, index) => (
            <Component name="section" key={index}>
                <Component name="title">{title}</Component>
                <Component name="content">{content}</Component>
            </Component>
        ))}
    </Module>
);