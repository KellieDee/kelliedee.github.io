(function($) {  

    $('li').hover(function(){
        $(this).find('div').slideDown();
    }, function(){
        $(this).find('div').slideUp();
    });
        
})(jQuery);