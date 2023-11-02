$(document).ready(function () {
    /*----feather icons init-----*/
    feather.replace();

    /*------datarangepicker init----*/
    $('input[name="daterange"]').daterangepicker();


});

// owl carousel
(function ($) {


    var carousel = function () {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            // autoplay: true,
            // margin: 30,
            // animateOut: 'fadeOut',
            // animateIn: 'fadeIn',
            nav: true,
            dots: true,
            // autoplayHoverPause: false,
            items: 1,
            navText: ["<p><small> <span>&#8592;</span> Back</small><span class='ion-ios-arrow-round-back'></span></p>", "<p><small>Next <span>&#8594;</span></small><span class='ion-ios-arrow-round-forward'></span></p>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });

    };
    carousel();

})(jQuery);