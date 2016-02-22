(function($) {  

    $('li').hover(function(){
        $(this).find('ul:first').show();
    }, function(){
        $(this).find('ul').hide();
    });
    
})(jQuery);