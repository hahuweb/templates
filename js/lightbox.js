$(function () {

    if ($(window).width() > 992) {

        /*
         * img lightbox
         */
        
        $('.slider-container img').on('click', function () {
            var src = $(this).attr("src");
            $(".lb-img").attr("src", src);
            $('.overley').fadeIn('slow');
            $('.overley-content').fadeIn('slow');
        });

        // next
        $('.nextButton').on('click', function (event) {
            $(".overley-content img").hide();
            var $currentImgSrc = $(".overley-content img").attr("src");
            var $currentImg = $('.slider-container img[src="' + $currentImgSrc + '"]');
            var $nextImg = $($currentImg.next("img"));
            var $images = $(".slider-container img");
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
            var $currentImg = $('.slider-container img[src="' + $currentImgSrc + '"]');
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
})