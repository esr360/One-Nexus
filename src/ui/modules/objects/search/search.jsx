import defaults from './search.json';
import interactions from './search.js';

/**
 * Render Search module
 */
const Search = ({ init, toggle, go, close, ...props }) => {
    const config = Object.assign(defaults.search, window.theme.search);

    window.addEventListener('load', init, true);

    return (
        <Module name={config.name} {...props}>
            <Component name='wrapper' tag='form'>
                <Component name='input' tag='input' required type='search' placeholder='Enter search query...' />

                <Component module='button' name='group' small>
                    <Component name='go' Button={go} tag='button' type='submit'>
                        <i class="fa fa-search"></i>
                    </Component>
                    <Component name='close' Button={close} tag='button' type='button' onClick={toggle}>
                        <i class="fa fa-times"></i>
                    </Component>
                </Component>
            </Component>
        </Module>
    );
}

Search.defaultProps = {
    init: interactions.init,
    toggle: interactions.toggle,
    go: ['icon', 'brand-1'],
    close: ['icon', 'brand-2']
};

export default Search;