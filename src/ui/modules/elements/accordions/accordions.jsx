import defaults from './accordions.json';

/**
 * Render Accordion component
 * 
 * @access public
 *
 * @param {Object} content
 */
export const Accordion = ({name = defaults.accordions.name, panels}) => (
    <div className={name}>
        {panels.map(({title, content}, index) => (
            <div className={`${name}_section`} key={index}>
                <div className={`${name}_title`}>{title}</div>
                <div className={`${name}_content`}>{content}</div>
            </div>
        ))}
    </div>
);