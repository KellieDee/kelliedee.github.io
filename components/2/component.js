(function($) {  

    $('li').hover(function(){
        $(this).find('section:first').slideDown();
    }, function(){
        $(this).find('section:first').slideUp();
    });
        
})(jQuery);