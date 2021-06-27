AOS.init(); 
$(document).ready(function () {
     //initialisation aos
    
     
    //change navbar color on scrolling
    // $(window).scroll(function() { 
    //     if ($(document).scrollTop() > 450) { 
    //       $(".fixed-top").addClass('colorNavbar2'); 
    //       $(".fixed-top").removeClass('colorNavbar1');          
    //     } else {
    //         $(".fixed-top").addClass('colorNavbar1'); 
    //       $(".fixed-top").removeClass('colorNavbar2'); 
    //     }
    //   });  
    $(document).scroll(function () {
      var $nav = $(".fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > 500);
    }); 

    // Un défilement animé (« Smooth scroll ») en jQuery sans plugin
    $('a[href^="#"]').click(function () {
        var the_id = $(this).attr("href");
        if (the_id === '#') {
            return;
        }
        $('html, body').animate({
            scrollTop: $(the_id).offset().top
        }, 'slow');
        return false;
    });
});