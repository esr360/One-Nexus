(function ($) {
    
    /**
     * KAYZEN
     * @module: 'twitter-feed'
     * @dependencies: OwlCarousel, TweeCool
     * @author: @esr360
     */
    $.fn.twitterFeed = function(custom) {
        
        // Options
        var options = $.extend({
            username  : 'esr360',
            tweets    : 8,
            container : '.twitter-feed_content'
        }, custom);
        
        // Used to generate unique IDs
        var i = 1;
        
        // Run the code on each occurance of the element
        return this.each(function() {
            
            var feed = $(this);
            var user = feed.data('twitter-handle') || options.username;
            var tweets = feed.find(options.container);
            
            // If the feed doesn't have an ID, add one
            if (!feed.attr('id')) {
                feed.attr('id', 'KayzenTwitterFeed' + i);
            }
            
            // Get the ID of the feed
            var containerID = '#' + feed.attr('id');
            
            // Call the Tweecool plugin on the feed
            tweets.tweecool({
                username     : user, 
                limit        : options.tweets,
                show_actions : true,
                action_reply_icon : '<i class="fa fa-reply"></i>',
                action_retweet_icon : '<i class="fa fa-retweet"></i>',
                action_favorite_icon : '<i class="fa fa-star"></i>'
            });
            
            // Get the last tweet
            var lastTweet = containerID + ' .tweet:nth-child(' + options.tweets + ')';
            
            // Prepare the tweets for OwlCarousel
            tweets.find('.tweets').addClass('owl-carousel');
                        
            // when all tweets are loaded...
            $('body').on('DOMNodeInserted', lastTweet, function () {
                    
                // Hide the loader
                $('.loading-tweets').hide();
                
                // Show the next/prev buttons
                $('.tweets-nav').show();
                
                // Get the carousel selector
                var tweetCarousel = $(containerID + ' .tweets');
                
                // Call OwlCarousel on the tweets
                tweetCarousel.owlCarousel({
                    items: 1,
                    loop: true,
                    dots: false
                });
                
                // Trigger the previous tweet
                $(containerID + ' .tweet-prev').click(function() {
                    tweetCarousel.trigger('prev.owl.carousel');
                });
                
                // Trigger the next tweet
                $(containerID + ' .tweet-next').click(function() {
                    tweetCarousel.trigger('next.owl.carousel');
                });
                
            });
            
            // Increment i for the IDs
            i++

        }); // this.each
 
    }; // twitterFeed()
 
}(jQuery));