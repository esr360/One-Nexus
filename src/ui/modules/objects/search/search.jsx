import defaults from './assets/config.js';
import layout from './assets/layout.js';
import interactions from './assets/interactions.js';

/**
 * Render Search module
 */
const Search = ({ go, close, ...props }) => {
    return (
        <Module {...props}>
            <Component name='wrapper' tag='form' Container>
                <Component name='input' tag='input' required type='search' placeholder='Enter search query...' />

                <Component name='actions'>
                    <Component name='go'>{go()}</Component>

                    <Component name='close'>{close()}</Component>
                </Component>
            </Component>
        </Module>
    );
}

export default Object.assign(Search, {
    ...interactions, layout, defaults, defaultProps: {
        name: 'Search',
        go: () => <Button icon brand-1 size-4><Component name='icon' className="fa fa-search"></Component></Button>,
        close: () => <Button icon brand-2 size-4 type='button'><Component name='icon' className="fa fa-times"></Component></Button>
    }
});