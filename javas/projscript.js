$(document).ready(function() {
    $(".menu").hide();
    $(".actitve").hide();
    $("#fade").hide();
    $(".imagecontent").hide();
    $(".buttoncontain").hide();
    $(".menu-button").click(function() {
        $(".menu").animate({
            width: "toggle"
        });
        $(".menul").toggleClass("active");
        $("#fade").fadeToggle();
    });
    $("#fade").click(function() {
        $("#fade").fadeOut();
        $(".menu").animate({
            width: "hide"
        });
        $(".menul").removeClass("active");
    });
    $("#box").click(function() {
        $(".menu").animate({
            width: "toggle"
        });
        $(".menul").toggleClass("active");
        $("#fade").fadeToggle();
    });
    $(".more").click(function() {
        $("#read").fadeOut(500);
        $(this).fadeOut(500);
        $("html, body").animate({
            scrollTop: $("#fifth").offset().top
        }, 1000);
        $(".imagecontent").animate({
            height: "show"
        }, 1000);
        $(".buttoncontain").animate({
            height: "show"
        }, 1000);
        $(".closebutton").fadeIn(100);
    });
    $(".closebutton").click(function() {
        $(".imagecontent").animate({
            height: "hide"
        }, 1000);
        $(this).fadeOut("slow");
        $(".buttoncontain").animate({
            height: "hide"
        }, 1000);
        $("#read").fadeIn(500);
        $(".more").fadeIn(500);
    });
    $(".torrenting-label").click(function() {
        $(this).css("background-color", "rgb(240,240,240)");
        $(".pirating-label").css("background-color", "white");
        $(".first-cont").css("z-index", "-1");
    });
    $(".pirating-label").click(function() {
        $(this).css("background-color", "rgb(240,240,240)");
        $(".torrenting-label").css("background-color", "white");
        $(".first-cont").css("z-index", "2");
    });
});