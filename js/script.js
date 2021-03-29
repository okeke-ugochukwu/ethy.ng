
//show or hide menu option
$(".open-btn").click(function() {
    $("#nav_UL").toggleClass("full");
})

//change silde
$("#sb1").click(function() {
    $(".sb").css("background", "#ffffffb5");
    $(this).css("background", "#412718");
    $(".slideshow_slider").css("margin-left", "0%");

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
$("#sb4").click(function() {
    $(".sb").css("background", "#ffffffb5");
    $(this).css("background", "#412718");
    $(".slideshow_slider").css("margin-left", "-300%");
})

//automatic sliding

var counter = 1
function moveslide() {
   var eu = document.getElementById("slideshow_slider").style.marginLeft;
   console.log(eu);

    if (eu != "-300%") {
        var eu_numerial_value = (eu.slice(0, -1) * 1);
        console.log(eu_numerial_value);
    
        eu = ((eu_numerial_value + (-100)) + "%"); 
        console.log(eu);

        document.getElementById("slideshow_slider").style.marginLeft = eu;
    }
    else {
        document.getElementById("slideshow_slider").style.marginLeft = "0%";
    }    
   
}

var counter = 0;
setInterval(() => {
   moveslide();
}, 5000);