$(document).ready(function(){
//    nav-link effect
    $(".navbar__link").click(function(){
        $(".navbar__link").removeClass("active");
        $(this).addClass("active");
    });
// navbar down
    $(".nav__btn__down").click(function(){
        $(".nav-fixed").slideToggle(500);
        $(this).hide();
        $(".nav__btn__up").show();
    });

    $(".nav__btn__up").click(function(){
        $(".nav-fixed").slideToggle(500);
        $(this).hide();
        $(".nav__btn__down").show();
    });
 
});