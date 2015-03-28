
/* Modal
// http://leanmodal.finelysliced.com.au
================================================================ */

(function($){
 
    $.fn.extend({ 
         
        leanModal: function(options) {
 
            var defaults = {
                top: 100,
                overlay: 1,
                closeButton: null
            }
            
            var overlay = $("<div class='modal-overlay'></div>");
            
            $("body").append(overlay);
                 
            options =  $.extend(defaults, options);
 
            return this.each(function() {
            
                var o = options;
               
                $(this).click(function(e) {
              
                var modal_id = $(this).attr("href");

                $(".modal-overlay").click(function() { 
                     close_modal(modal_id);                    
                });
                
                $(o.closeButton).click(function() { 
                     close_modal(modal_id);                    
                });
                            
                var modal_height = $(modal_id).outerHeight();
                var modal_width = $(modal_id).outerWidth();

                $('.modal-overlay').css({ 'display' : 'block', opacity : 0 });

                $('.modal-overlay').fadeTo(200,o.overlay);

                $(modal_id).css({ 
                
                    'display' : 'block',
                    'position' : 'fixed',
                    'opacity' : 0,
                    'z-index': 11000,
                    'left' : 50 + '%',
                    'margin-left' : -(modal_width/2) + "px",
                    'top' : o.top + "px"
                
                });

                $(modal_id).fadeTo(200,1);

                e.preventDefault();
                        
                });
             
            });

            function close_modal(modal_id){

                $(".modal-overlay").fadeOut(200);

                $(modal_id).css({ 'display' : 'none' });
            
            }
    
        }
    });
     
})(jQuery);