(function($) {  

    $('div').hover(function(){
        $(this).find('header').show().animate({bottom: '+27.297px'}, 'fast');
    }, function(){
        $(this).find('header').hide().animate({bottom: '0px'}, 'fast');
    });
        
})(jQuery);