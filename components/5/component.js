(function($) {  

    $('li:nth-of-type(1)').on('click', function(){     
        $(this).closest('section').find('article').hide();
        $(this).closest('section').find('article:nth-of-type(1)').fadeIn();
        $(this).closest('ul').find('li').removeClass('active');
        $(this).addClass('active');
    });
    
    $('li:nth-of-type(2)').on('click', function(){     
        $(this).closest('section').find('article').hide();
        $(this).closest('section').find('article:nth-of-type(2)').fadeIn();
        $(this).closest('ul').find('li').removeClass('active');
        $(this).addClass('active');
    });
    
    $('li:nth-of-type(3)').on('click', function(){     
        $(this).closest('section').find('article').hide();
        $(this).closest('section').find('article:nth-of-type(3)').fadeIn();
        $(this).closest('ul').find('li').removeClass('active');
        $(this).addClass('active');
    });
        
})(jQuery);