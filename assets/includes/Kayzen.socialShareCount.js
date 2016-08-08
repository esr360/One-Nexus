/**
 * Kayzen.socialShareCount
 * @author @esr360
 * @description Get the count of shares for given page
 */
(function ($) {
 
    $.fn.KayzenSocialShareCount = function(custom) {
        
        // Options
        var options = $.extend({
            url                : window.location.href,
            facebookCountID    : '#facebookShareCount',
            twitterCountID     : '#twitterShareCount',
            googleCountID      : '#googlePlusShareCount',
            linkedInCountID    : '#linkedInShareCount',
            stumbleUponCountID : '#stumbleUponShareCount',
            pinterestCountID   : '#pinterestShareCount',
            redditCountID      : '#redditShareCount'
        }, custom);
        
        // Convert numbers > 1,000 to 1k format
        function kFormatter(num) {
            return num > 999 ? (num/1000).toFixed(1) + 'k' : num
        }
            
        // strip the beginning part of the URL
        var strippedUrl = options.url.replace(/.*?:\/\//g, "");
    
        // Get the Facebook shares count
        $.get('http://graph.facebook.com/?id=' + options.url,
            function(data) {
                var _facebookCount = kFormatter(data['shares']);
                $(options.facebookCountID).html(_facebookCount);
            }
        );
        
        // Get the Twitter shares count
        $.get('http://cdn.api.twitter.com/1/urls/count.json?url=' + options.url,
            function(data) {
                var _twitterCount = kFormatter(data['count']);
                $(options.twitterCountID).html(_twitterCount);
            }
        );
        
        // Get the Google Plus shares count
        $.get('https://plusone.google.com/_/+1/fastbutton?url=http%3A%2F%2F' + strippedUrl,
            function(data) {
                var _googlePlusCount = $(data).find('#aggregateCount').text();
                $(options.googleCountID).html(_googlePlusCount);
            }
        );
        
        // Get the LikedIn shares count
        $.get('http://www.linkedin.com/countserv/count/share?url=' + options.url + '&format=json',
            function(data) {
                var _linkedInCount = kFormatter(data['count']);
                $(options.linkedInCountID).html(_linkedInCount);
            }
        );
        
        // Get the StumbleUpon views count
        $.getJSON('http://www.stumbleupon.com/services/1.01/badge.getinfo?url=' + options.url,
            function(data) {
                var _stumbleUponCount = kFormatter(data['result']['views']);
                $(options.stumbleUponCountID).html(_stumbleUponCount);
            }
        );
        
        // Get the Pinterest shares count
        $.getJSON('http://api.pinterest.com/v1/urls/count.json?callback=?&url=' + options.url, 
            function (data) {
                var _pinterestCount = kFormatter(data['count']);
                $(options.pinterestCountID).html(_pinterestCount);
            }
        );
        
        // Get the Reddit shares count
        $.getJSON('http://www.reddit.com/api/info.json?url=' + options.url, 
            function (data) {
                var _redditCount = data.data.children.length;
                $(options.redditCountID).html(_redditCount);
            }
        );
 
    }; // KayzenSocialShareCount()
 
}(jQuery));