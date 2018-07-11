import defaults from './overlay.json';

const Overlay = props => {
    const config = Object.assign(defaults.overlay, window.theme.overlay);

    return (
        <Module name={config.name} {...props}>
            {props.children}
        </Module>
    );
}

export default Overlay;