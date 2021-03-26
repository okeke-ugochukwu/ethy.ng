
//show or hide menu option
$(".open-btn").click(function() {
    $("#nav_UL").toggleClass("full");
})

//change silde
$("#sb1").click(function() {
    $(".sb").css("background", "#ffffffb5");
    $(this).css("background", "#412718");
    $(".slideshow_slider").css("margin-left", "0");

})
$("#sb2").click(function() {
    $(".sb").css("background", "#ffffffb5");
    $(this).css("background", "#412718");
    $(".slideshow_slider").css("margin-left", "-100%");
})
$("#sb3").click(function() {
    $(".sb").css("background", "#ffffffb5");
    $(this).css("background", "#412718");
    $(".slideshow_slider").css("margin-left", "-200%");
})
