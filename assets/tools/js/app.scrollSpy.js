/**
 * ScrollSpy
 * 
 * @access public
 * 
 * @param {Object} custom - where custom options are passed
 */
export function scrollSpy(custom) {

    /**
     * @param {String} options.container - CSS selector for scrollSpy links container
     * @param {String} options.element - CSS selector for scrollSpy link elements
     * @param {String} options.activeClass - class to apply to link element when target is in view
     * @param {String} options.buffer - number of pixels to act as a buffer when the element is in view
     */
    const options = Object.assign({
        container: null,
        element: 'a',
        activeClass: 'active',
        buffer: 25
    }, custom);

    if (!options.container) {
        console.warn('ScrollSpy: you must pass a value for "container"')
    }

    const spyLinks = document.querySelector(options.container).querySelectorAll(options.element);

    const spyTargets = (targets = []) => {
        spyLinks.forEach(el => targets.push(document.querySelector(el.getAttribute('href'))));
        return targets;
    }

    window.onscroll = () => {
        var scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;

        spyTargets().forEach((target, index) => {
            if ((target.offsetTop - options.buffer) < scrollPosition) {
                spyLinks.forEach(el => el.classList.remove(options.activeClass));
                spyLinks[index].classList.add(options.activeClass);
            } else {
                spyLinks[index].classList.remove(options.activeClass);
            }
        });
    };
}