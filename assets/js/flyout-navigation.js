
/* Flyout Navigation
================================================================ */

$(document).ready(function() {

    var fnContainer = $('#flyout');

    // create the flyout nav HTML
    function flyoutNav() {

        $("#flyout-trigger").detach().prependTo('body') // relocate the flyout-trigger in the DOM
        $("#app-nav > ul").clone().appendTo(fnContainer); // clone the main nav into the flyout nav container

    } // End flyoutNav()

    $(flyoutNav);

}); // end document.ready

$(window).load(function(){

    function toggleFlyout(state) {

        function flyoutEvents(){
            $('body').toggleClass('flyout-active');
            $('#flyout-trigger').toggleClass('active');
            $('#site-overlay').toggleClass('visible');
        }

        if($('body').hasClass('flyout-active')) {  // is the flyout nav currently toggled?
            // yes we are
            if(state != 1) {
                flyoutEvents();
            }
        } else {
            // no, we are not
            if(state != 0) {
                flyoutEvents();
            }
        }

    } // end toggleFlyout()

    // toggle the flyout nav
    $('#flyout-trigger').click(function() {
        toggleFlyout();
    });

    $('#flyout-nav a, .site-overlay').click(function() {
        toggleFlyout(0);
    });

}); // end window.load