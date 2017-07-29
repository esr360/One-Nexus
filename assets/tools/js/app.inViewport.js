/**
 * Detect if an element is in the viewport
 * 
 * @access public
 * 
 * @param {Object} custom - where custom options are passed
 */
export function inViewport(custom) {

    /**
     * @param {HTMLElement} options.target - the target element
     * @param {('top'|'middle'|'bottom'|'$%'|'$px')} options.scope[0] - point which the element is considered to be in the viepwport
     * @param {('reached'|'inView')} options.scope[1] - determine how the scope should work
     */
    const options = Object.assign({
        target: null,
        scope: ['top', 'inView']
    }, custom);

    if (!options.target) {
        console.warn('inViewport: you must pass a value for "target"')
    }

    const point = options.scope[0];

    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    const scrollBottom = scrollTop + Math.max(document.documentElement.clientHeight, window.innerHeight);

    var elemTop = options.target.getBoundingClientRect().top + scrollTop;

    const elemHeight = options.target.clientHeight;

    const scope = () => {
        if (point === 'top') return elemTop;

        else if (point === 'middle') return elemTop + (elemHeight/2);

        else if (point === 'bottom') return elemTop + elemHeight;

        else if (typeof point === 'string') {
            var value = Number(point.match(/\d+/)[0]);
            // value is a percentage
            if (point.indexOf('%') >= 0) return elemTop + (elemHeight/100 * value);
            // value is in pixels
            else if (point.indexOf('px') >= 0) return elemTop + value;
        }

        else return console.warn('inViewport: you must pass a valid value for "scope"')
    }

    const reached = scope() < scrollBottom;
    const inView  = reached && (scrollTop < scope());

    return options.scope[1] === 'reached' ? reached : inView;

}