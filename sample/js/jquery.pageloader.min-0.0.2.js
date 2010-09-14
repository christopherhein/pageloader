/**
* jQuery Page Loader 
*
* Easy to use ajax page loader
*
* Dual licensed under the MIT or GPL Version 2 licenses.
*
* @category   jQuery
* @copyright  Copyright (c) 2010, Christopher Hein
* @license    http://chrishe.in/licenses
* @version    Release: 0.0.2:beta
* @link       http://chrishe.in/
* @github			http://github.com/christopherhein/pageloader
*
*/

(function($) {

  $.fn.load_newpage = function(options) {      
      
      // Settings
    settings = jQuery.extend({
      time: 500,
      transition: "fade", 
      page:       "/",
      parent:     "content",
      child:     "container",
			title:      "Nothing to see here",
			height: 		null,
    }, options);
    
    var elem = $(this);
    $('#pg_title').html(settings.title);
    
    if( settings.transition == 'fade' ) {
      $('#'+settings.parent+' .'+settings.child).fadeOut(500, function(){
        $('#'+settings.parent+' .'+settings.child).remove();
        
        $.ajax({
          cache: false,
          url: settings.page,
          success: function(data) {
						if(settings.height != null) {
							$('#'+settings.parent).animate({height: settings.height+'px'}, 500, function(){
								$('#'+settings.parent).append('<div class="'+settings.child+'"><div>');
	            	$('#'+settings.parent+' .'+settings.child).html(data);
							});
						} else {
            	$('#'+settings.parent).append('<div class="'+settings.child+'"><div>');
            	$('#'+settings.parent+' .'+settings.child).html(data);
						}
          }
        });
      });
    }
  } 
  
  $.fn.load_page = function(options) {      
      
      // Settings
    settings = jQuery.extend({ 
      page:       "/",
      parent:     "content",
      child:     "container",
			title:      "Nothing to see here",
    }, options);
    
    var elem = $(this);
    
    $('#'+settings.parent+' .'+settings.child).remove();
    $('#pg_title').html(settings.title);
    
    $.ajax({
      cache: false,
      url: settings.page,
      success: function(data) {
        $('#'+settings.parent).append('<div class="'+settings.child+'"><div>');
        //$('#'+settings.parent+' .'+settings.child).fadeOut(0);
        $('#'+settings.parent+' .'+settings.child).html(data);
      }
    });
    
  }  
	
})(jQuery);
