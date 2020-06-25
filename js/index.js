$(document).ready(function(){

// navbar down
    $(".nav__btn__down").click(function(){
        $("nav").slideToggle(500);
        $(this).hide();
        $(".nav__btn__up").show();
    });

    $(".nav__btn__up").click(function(){
        $("nav").slideToggle(500);
        $(this).hide();
        $(".nav__btn__down").show();
    });
 
});