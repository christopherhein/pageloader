/*
 • jQuery Page Loader
 • http://christopherhein.com
 •
 • Copyright 2010, Christopher Hein
 • Free to use and abuse under the GPL license.
 • http://www.gnu.org/copyleft/gpl.html
 • 
 • June 2010
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
            $('#'+settings.parent).append('<div class="'+settings.child+'"><div>');
            $('#'+settings.parent+' .'+settings.child).html(data);
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
