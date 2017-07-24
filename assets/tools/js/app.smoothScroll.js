/**
 * Animate scrolling to anchor links
 * 
 * @access public
 * @see https://codepen.io/rleve/pen/iCbgy
 * 
 * @param {String} selector
 */
export function smoothScroll(custom) {

    const options = Object.assign({
        speed: 300
    }, custom);

    // Define smooth scroll links
    const scrollToggle = document.querySelectorAll('a');

    // Function to animate the scroll
    const smoothScroll = (anchor, duration) => {
        // Calculate how far and how fast to scroll
        var startLocation = window.pageYOffset;
        var endLocation = anchor.offsetTop;
        var distance = endLocation - startLocation;
        var increments = distance/(duration/16);

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
            var scrollDirection = (increments >= 0) ? down : up;

            if (scrollDirection) {
                clearInterval(runAnimation);
            }
        };

        // Loop the animation function
        const runAnimation = setInterval(animateScroll, 16);
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