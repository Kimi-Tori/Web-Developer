$(function () {
    var header = $("#header")
    var headerFlex = $("#header-flex");
    var headerImg = $("#header__logo");
    var about = $("#about");
    var contacts = $("#contacts");
    var scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function () {
        var headerH = header.height();
        scrollPos = $(this).scrollTop();

        if(scrollPos > headerH) {
            headerFlex.addClass("fixed");
            headerImg.removeChild(headerImg);
        } else {
            headerFlex.removeClass("fixed");
        }

    });

    console.log(headerH);
    console.log(scrollPos);
    
    headerFlex.addClass("fixed");

});