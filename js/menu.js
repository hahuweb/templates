/* 
 * js
 */


(function ($) {
    "use strict";

    // Initiate the wowjs
    new WOW().init();



    // preloader
    $(window).on('load', function () {
        $("#preloader").animate({
            'opacity': '0'
        }, 600, function () {
            setTimeout(function () {
                $("#preloader").css("visibility", "hidden").fadeOut();
            }, 300);
        });

    });

    if ($(window).width() < 992) {

        // navbar-collapse
        $('.collapse, .hp-link').click(function () {
            $('.navbar-collapse').collapse('toggle');
            $('.menu-toggler').find(".bi").toggleClass("bi bi-list bi bi-x");
        });
        $(".menu-toggler").click(function () {
            $(this).find(".bi").toggleClass("bi bi-list bi bi-x");
            $('.navbar-collapse').collapse('toggle');
        });



    }

    /* side menu */
    $('.side-toggler').click(function () {
        $('.left-content').css({
            "display": "block",
        });
        $('.hp-overlay').css({
            "display": "block",

        });
    });

    $('.hp-overlay').click(function () {
        $('.left-content, .hp-overlay').css({
            "display": "none",
        });
    });
    $('.left-content, nav-link').click(function () {
        $('.left-content, .hp-overlay').fadeOut('fast')

    });

    /*
    * vid lightbox
    */

    $('.vid-lb').on('click', function (event) {
        event.preventDefault();
        var src = $(this).attr("href");
        $(".vid-frame").attr("src", src);
        $('.vid-overley').fadeIn('slow');
        $('.video-content').fadeIn('slow');
    });

    // exit
    $('.exitBtn').on('click', function () {
        $('.vid-overley').fadeOut('slow');
        $('.video-content').fadeOut('slow');
        var src = $(this).attr("href");
        $(".vid-frame").attr("src", '');
    });
    // overley
    $('.video-content').on('click', function () {
        $('.vid-overley').fadeOut('slow');
        $('.video-content').fadeOut('slow');
        var src = $(this).attr("href");
        $(".vid-frame").attr("src", '');
    });


    /* slider */
    if ($(window).width() < 992) {

        $(".swiffy-slider").removeClass("slider-nav-outside-expand")
        $(".swiffy-slider").addClass("slider-nav-mousedrag")
        $(".swiffy-slider").removeClass("slider-nav-page")

    }

    /*
    * lightbox
    */
    if ($(window).width() > 992) {

        $('.swiffy-slider img').on('click', function () {
            var src = $(this).attr("src");
            $(".lb-img").attr("src", src);
            $('.overley').fadeIn('slow');
            $('.overley-content').fadeIn('slow');
        });

        // next
        $('.nextButton').on('click', function (event) {
            $(".overley-content img").hide();
            var $currentImgSrc = $(".overley-content img").attr("src");
            var $currentImg = $('.swiffy-slider img[src="' + $currentImgSrc + '"]');
            var $nextImg = $($currentImg.next("img"));
            var $images = $(".swiffy-slider img");
            if ($nextImg.length > 0) {
                $(".overley-content img").attr("src", $nextImg.attr("src")).fadeIn(800);
            } else {
                $(".overley-content img").attr("src", $($images[0]).attr("src")).fadeIn(800);
            }
            event.stopPropagation();

        });

        // prev
        $('.prevButton').on('click', function (event) {
            $(".lb-img").hide();
            var $currentImgSrc = $(".lb-img").attr("src");
            var $currentImg = $('.swiffy-slider img[src="' + $currentImgSrc + '"]');
            var $nextImg = $($currentImg.prev("img"));
            $(".lb-img").attr("src", $nextImg.attr("src")).fadeIn(800);
            event.stopPropagation();
        });

        // exit
        $('.exitButton').on('click', function () {
            $('.overley').fadeOut('slow');
            $('.overley-content').fadeOut('slow');
        });
        // overley
        $('.overley-content').on('click', function () {
            $('.overley').fadeOut('slow');
            $('.overley-content').fadeOut('slow');
        });
    }
})(jQuery);
