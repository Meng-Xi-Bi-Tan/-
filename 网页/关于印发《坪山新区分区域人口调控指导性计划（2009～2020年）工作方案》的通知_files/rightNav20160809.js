$(function(){
    $(".index-btn-next").css("display","none");
    setTimeout(load_display,3000);
    setTimeout(right_nav_touch,1000);
});

function load_display(){
    $(".right-nav").animate({right :-78 } , 520 );
    $(".hand").css("opacity","100");
    $(".index-btn-next").css("display","block");
}
function right_nav_touch(){

    $(".right-navBox").hover(function(){
            $(".hand").css("opacity","0");
            $(".hand").stop().animate({ right :80 } , 520 );
            $(".right-nav").stop().animate({ right :0 } , 520 );
            $(".index-btn-next").css("display","none");
        },
        function abc(){
            $(".right-nav").stop().animate({ right :-78 } , 520 );
            $(".hand").stop().animate({ right :0 } , 520 );
            $(".hand").css("opacity","100");
            $(".index-btn-next").css("display","block");
        }
    );
}