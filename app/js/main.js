$(window).on("scroll", function () {
    var scrolled = $(this).scrollTop();
    if (scrolled >= 580) {
        $(".nav_bar").removeClass();
        $("nav").addClass("nav_bar_size");
    } if (scrolled <= 1) {
        $("nav").removeClass("nav_bar_size");
        $("nav").addClass("nav_bar");
    }
    
    });

$('#btn_02').click( function(){
    $(".img03").css("display", "none");
    $(".img04").css("display", "none");
});
$('#btn_01').click( function(){
    $(".img03").css("display", "inline-block");
    $(".img04").css("display", "inline-block");
});


$('.go_boxes').click( function(){ 
	var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) {
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1300); 
        }
	    return false; 
    });

    $('.go_filter').click( function(){ 
        var scroll_el = $(this).attr('href'); 
            if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1300); 
            }
            return false; 
        });