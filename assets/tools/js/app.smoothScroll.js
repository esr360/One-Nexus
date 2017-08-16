/**
 * Animate scrolling to anchor links
 * 
 * @access public
 * @see https://codepen.io/rleve/pen/iCbgy
 * 
 * @todo fix downwards scroll when <html> tag has 100% height
 * 
 * @param {Object} custom - where custom options are passed
 */
export function smoothScroll(custom) {

    /**
     * @param {Number} [options.speed=300] - the animation duration (milliseconds)
     * @param {Number} [options.increments=16] - increments to scroll by
     */
    const options = Object.assign({
        speed: 300,
        increments: 16
    }, custom);

    // Define smooth scroll links
    const scrollToggle = document.querySelectorAll('a:not([rel="modal"])');

    // Function to animate the scroll
    const smoothScroll = (anchor, duration) => {
        // Calculate how far and how fast to scroll
        var startLocation = window.pageYOffset;
        var endLocation = anchor.offsetTop;
        var distance = endLocation - startLocation;
        var increments = distance/(duration/options.increments);

        // Scroll the page by an increment, and check if it's time to stop
        const animateScroll = () => {
            window.scrollBy(0, increments);
            stopAnimation();
        };

        // Stop animation when you reach the anchor OR the bottom of the page
        const stopAnimation = () => {
            var travelled = window.pageYOffset;
            var down = (travelled >= (endLocation - increments)) || ((window.innerHeight + travelled) >= document.body.offsetHeight);
            var up = travelled <= (endLocation || 0);
            var shouldStop = (increments >= 0) ? down : up;

            if (shouldStop) {
                clearInterval(runAnimation);
            }
        };

        // Loop the animation function
        const runAnimation = setInterval(animateScroll, options.increments);
    };

    // For each smooth scroll link
    scrollToggle.forEach(toggle => {
        // When the smooth scroll link is clicked
        toggle.addEventListener('click', e => {
            // Prevent the default link behavior
            e.preventDefault();

            // Get anchor link and calculate distance from the top
            var dataID = toggle.getAttribute('href');
            var dataTarget = document.querySelector(dataID);

            // If the anchor exists, scroll to it
            if (dataTarget) {
                smoothScroll(dataTarget, options.speed);
            }
        }, false);
    });

}