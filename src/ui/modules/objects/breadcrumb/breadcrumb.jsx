import defaults from './breadcrumb.json';

/**
 * Render Breadcrumb module
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

Breadcrumb.defaultProps = {
    object: true
};

export default Breadcrumb;