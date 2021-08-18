$(window).load(function() {
    $(".preloader-sa").fadeOut(1000);
});

$(document).ready(function() {

    $('.slider .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        rtl: true,
        autoplay: true,
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
    })

    /* ************************end slider******************* */

    /* ************************start navbar******************* */
    if ($(window).width() <= 992) {
        $(".bt_bars").click(function() {
            $(".navbar_").addClass("open_");
            $(".moboverlay").fadeIn('500');
            $(".bars_icon").addClass("close_");
            $("body").addClass("over");
        });

        $(".moboverlay").click(function() {
            $(".navbar_").removeClass("open_");
            $(".moboverlay").fadeOut('500');
            $(".bars_icon").removeClass("close_");
            $("body").removeClass("over");

        });
        $(".lnr-cross").click(function() {
            $(".navbar_").removeClass("open_");
            $(".moboverlay").fadeOut('500');
            $(".bars_icon").removeClass("close_");
            $("body").removeClass("over");

        });
        $(".menu_hover").click(function() {
            $(".drop_menu").slideToggle("500");
        })
    };
    /* ************************end navbar******************* */

    /* ************************start new**********************/
    $('.new .owl-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            rtl: $("html").attr("dir") == "rtl" ? true : false,
            stagePadding: 6,
            navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
            responsive: {
                0: {
                    items: 2,
                    margin: 15,
                },
                600: {
                    items: 3,
                    margin: 30
                },
                1000: {
                    items: 5
                }
            }
        })
        /**************************end new********************** */


});