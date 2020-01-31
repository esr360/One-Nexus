/**
 * Determine if an element is in the viewport
 */
export default function inViewport(custom) {

    /**
     * Options
     */
    const options = Object.assign({
        container: document.body,
        target: null,
        coverage: 'top',
        scope: 'inView'
    }, custom);

    if (!options.target) {
        console.warn('inViewport: you must pass a value for "target"');
    }

    const scrollTop = options.container.scrollTop;

    const elemTop = (options.target.getBoundingClientRect().top - window.innerHeight) + scrollTop;
    const elemHeight = options.target.clientHeight;

    const scope = getScope();

    const reached = (scrollTop > scope);
    const inView  = reached && (scrollTop < (elemTop + elemHeight + window.innerHeight));

    function getScope() {
        if (options.coverage === 'top') return elemTop;

        else if (options.coverage === 'middle') return elemTop + (elemHeight/2);

        else if (options.coverage === 'bottom') return elemTop + elemHeight;

        else if (typeof options.coverage === 'string') {
            var value = Number(options.coverage.match(/\d+/)[0]);
            // value is a percentage
            if (options.coverage.indexOf('%') >= 0) return elemTop + (elemHeight/100 * value);
            // value is in pixels
            else if (options.coverage.indexOf('px') >= 0) return elemTop + value;
        }

        else return console.warn('inViewport: you must pass a valid value for "scope"');        
    }

    return options.scope === 'reached' ? reached : inView;
}