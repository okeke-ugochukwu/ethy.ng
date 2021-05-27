//show or hide menu option 
$("#default_flexbox-open-btn").click(function() {
    $("#nav_UL").toggleClass("full");
})

$("#main_all-open-btn").click(function() {
    $(".main_all__nav").toggleClass("open");
    $(".page").toggleClass("part_view");
})


//automatic sliding for main sideshow
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
function moveSlider2() {
   var sliderMargin2 = document.getElementById("slideshow2_slider").style.marginLeft;
   var slidershow_text_heading = document.getElementById("slideshow2_text_heading").innerHTML;

   switch (sliderMargin2) {
       case "0%":
            $(".slideshow2_slider").css("margin-left", "-100%");
            $("#slideshow2_text_heading").html(miniSlideShowHeadings[1]);
            break;
   
        case "-100%":
            $(".slideshow2_slider").css("margin-left", "-200%");
            $("#slideshow2_text_heading").html(miniSlideShowHeadings[2]);
            break;
        case "-200%":
            $(".slideshow2_slider").css("margin-left", "-300%");
            $("#slideshow2_text_heading").html(miniSlideShowHeadings[3]);
            break;
        case "-300%":
            $(".slideshow2_slider").css("margin-left", "-400%");
            $("#slideshow2_text_heading").html(miniSlideShowHeadings[4]);
            break;
        case "-400%":
            $(".slideshow2_slider").css("margin-left", "0%");
            $("#slideshow2_text_heading").html(miniSlideShowHeadings[0]);
            break;
    }
}

//automatic sliding for main slideshow
setInterval(() => {
    moveSlider();
}, 7000);

//automatic slideing for mini slideshow
setInterval(() => {
    moveSlider2();
}, 5000);


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

var miniSlideShowHeadings = [
    "Ethy MangoPapaya Set", "Ethy Coffee Set", "Ethy Lipcare Set", "Ethy Healing Blue Cream", "Ethy Lip Glosses"
];

var miniSlideShowText = [
    "Ethy MangoPapaya Set", "Ethy Coffee Set", "Ethy Lipcare Set", "Ethy Healing Blue Cream", "Ethy Lip Glosses"
];