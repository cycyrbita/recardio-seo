
$(document).ready(function () {
    $('.js-open-menu').click(function() {
        $('.header').toggleClass('mobile');
        $('body, html').toggleClass('overflow');
    })

    $('.js-commits__box').owlCarousel({
        loop: true,
        autoHeight: true,
        margin: 40,
        responsive : {
            320 : {
                items: 1
            },

            768 : {
                items: 2
            },

            1280 : {
                items: 3
            }
        }
    });
});