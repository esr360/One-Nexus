import defaults from './alert-bars.json';

/**
 * Render Accordion component
 *
 * @param {String} props.name
 * @param {Array}  props.panels
 * @param {Array}  props.modifiers
 */
export const AlertBars = ({name = defaults['alert-bars'].name, modifiers}) => (
    <Module name={name} modifiers={modifiers}>
        Alert Bar
    </Module>
);