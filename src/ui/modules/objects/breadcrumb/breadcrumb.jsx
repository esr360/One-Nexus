import defaults from './breadcrumb.json';

/**
 * Render Breadcrumb component
 */
const Breadcrumb = props => {
    const config = Object.assign(defaults.breadcrumb, window.theme.breadcrumb);

    return (
        <Module name={config.name} {...props}>
            <ul>{props.children}</ul>
        </Module>
    );
}

Breadcrumb.Item = props => <li>{props.children}</li>;

Breadcrumb.defaultProps = {};

export default Breadcrumb;