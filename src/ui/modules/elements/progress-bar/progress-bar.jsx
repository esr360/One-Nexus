import defaults from './assets/config';
import layout from './assets/layout.jss';

/**
 * Render Paragraph module
 */
const ProgressBar = ({ text, ...props }) => (
    <Module data-progress={text} {...props}>
        {props.children}
    </Module>
);

export default Object.assign(ProgressBar, {
    layout, defaults, defaultProps: {
        name: 'ProgressBar',
        object: true,
        tag: 'progress'
    }
});