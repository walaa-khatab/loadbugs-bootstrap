$(document).ready(function () {
    /*----feather icons init-----*/
    feather.replace();

    /*------datarangepicker init----*/
    $('input[name="daterange"]').daterangepicker();

    /*------------Toggle Cart Drop Down ------------*/

    $(document).on('click','#openCart',function () {
        $('.cart-dropdown').removeClass('d-none');
        $('body').addClass('overlay', {duration:400});
    })

    $(document).on('click','#closeCart',function () {
        $('.cart-dropdown').addClass('d-none');
        $('body').removeClass('overlay', {duration:400});
    })
    /*------------Quantity ------------*/
    var buttonPlus  = $(".qty-btn-plus");
    var buttonMinus = $(".qty-btn-minus");

    var incrementPlus = buttonPlus.click(function() {
    var $n = $(this)
    .parent(".qty-container")
    .find(".input-qty");
    $n.val(Number($n.val())+1 );
    });

    var incrementMinus = buttonMinus.click(function() {
    var $n = $(this)
    .parent(".qty-container")
    .find(".input-qty");
    var amount = Number($n.val());
    if (amount > 0) {
        $n.val(amount-1);
    }
    });


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

