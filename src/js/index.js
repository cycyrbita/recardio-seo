
$(document).ready(function () {
    $('.js-open-menu').click(function() {
        $('.header').toggleClass('mobile');
        $('body, html').toggleClass('overflow');
    })

    $('.message__body').owlCarousel({
        loop: true,
        autoHeight: true,
        items: 1,
        nav: true,
        responsive: {
            0 : {
                stagePadding: 0,
                margin: 15
            },
            600 : {
                stagePadding: 50,
                margin: 55
            }
        }
    });
});