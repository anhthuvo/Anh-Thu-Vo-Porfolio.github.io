$(document).ready(function(){

    // navbar show when click
    $(".nav__btn__down").click(function(){
        $("nav").toggle(1000);
        $(this).hide();
        $(".nav__btn__up").show();
    });

    $(".nav__btn__up").click(function(){
        $("nav").toggle(1000);
        $(this).hide();
        $(".nav__btn__down").show();
    });



  
        

    // click outside navbar, navbar hide
    $("body").click(function(event){
        console.log(event.target.className);
        if ( $("nav").css("display") == 'block'){
          if ( event.target.className.indexOf("nav-link") == -1
                && event.target.className.indexOf("nav__btn__down") == -1
                && event.target.className.indexOf("nav__btn__up") == -1 ){
                   $("nav").toggle();
                   $(".nav__btn__up").hide();
                    $(".nav__btn__down").show();
          }
        }
    });
    
    //   $(window).scroll(function() {
    //     // navbar hide when scrolling in mobile size
    //     if ( $("nav").css("display") == 'block' && 
    //          $(window).width() <= 767.98) {
    //         navtoggle();
    //     }

    //   });
});