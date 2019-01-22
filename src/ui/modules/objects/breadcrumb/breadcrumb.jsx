import defaults from './assets/config.js';
import layout from './assets/layout.js';

/**
 * Render Breadcrumb module
 */
const Breadcrumb = ({ data, separator, icon, ...props }) => (
    <Module {...props}>
        <Component name='list' tag='ul'>
            {props.children}

            {data && data.map((item, index) => {
                separator = index + 1 < data.length && separator;

                return (
                    <Breadcrumb.Item url={item.url} separator={separator} icon={item.icon||icon} key={index}>
                        {item.label}
                    </Breadcrumb.Item>
                )
            })}
        </Component>
    </Module>
);

Breadcrumb.Item = ({ url, separator, icon, ...props }) => {
    const RenderTag = url ? Component : React.Fragment;

    return (
        <Component name='item' tag='li'>
            <RenderTag name='link' tag='a' href={url}>
                {icon && <Component name='icon' tag='i' className={`fa fa-${icon}`} />}
                
                {props.children}

                {separator && <Component name='separator' tag='i' className={`fa fa-${separator}`} />}
            </RenderTag>
        </Component>
    )
};

export default Object.assign(Breadcrumb, {
    layout, defaults, defaultProps: {
        name: 'Breadcrumb',
        object: true,
        separator: 'angle-right'
    }
});