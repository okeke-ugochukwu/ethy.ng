//show or hide menu option 
$(".open-btn").click(function() {
    $("#nav_UL").toggleClass("full");
})


//automatic sliding
//I did not plan/reserch this properly berfore coding, code should have been alot shorter 
function moveSlider() {
   var sliderMargin = document.getElementById("slideshow_slider").style.marginLeft;

    switch (sliderMargin) {
        case "-300%":
            hightLightFirstBreadcrumb();
            break;

        case "-200%":
            hightLightFourthBreadcrumb();
            break;

        case "-100%":
            hightLightThirdBreadcrumb();
            break;

        case "0%":
            hightLightSecondBreadcrumb();
            break;       
    }


    // if (sliderMargin != "-300%") {
    //     var numerial_value = (sliderMargin.slice(0, -1) * 1); 
    //     sliderMargin = ((numerial_value + (-100)) + "%"); 

    //     document.getElementById("slideshow_slider").style.marginLeft = sliderMargin;
    // }
    // else {
    //     document.getElementById("slideshow_slider").style.marginLeft = "0%";
    // }    

    // var breadcrumbs = $(".sb");
    // console.log(breadcrumbs.length);
   
}

setInterval(() => {
    moveSlider();
}, 7000);

//change slide
function hightLightFirstBreadcrumb() {
    $(".sb").css("background", "#ffffffb5");
    $("#sb1").css("background", "#412718");
    $(".slideshow_slider").css("margin-left", "0%");
}
function hightLightSecondBreadcrumb() {
    $(".sb").css("background", "#ffffffb5");
    $("#sb2").css("background", "#412718");
    $(".slideshow_slider").css("margin-left", "-100%");
}
function hightLightThirdBreadcrumb() {
    $(".sb").css("background", "#ffffffb5");
    $("#sb3").css("background", "#412718");
    $(".slideshow_slider").css("margin-left", "-200%");
}
function hightLightFourthBreadcrumb() {
    $(".sb").css("background", "#ffffffb5");
    $("#sb4").css("background", "#412718");
    $(".slideshow_slider").css("margin-left", "-300%");
}