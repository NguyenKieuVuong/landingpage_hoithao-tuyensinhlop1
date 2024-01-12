(function ($) {
    $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');

        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
            $('.dropdown-submenu .show').removeClass("show");
        });

        return false;
    });
   
    //$('.slide-block1').owlCarousel({
    //    loop: true,
    //    margin: 0,
    //    dots: false,
    //    autoplay: false,
    //    items: 1,
    //    nav: true,
    //    navText: ["prev", "next"],
    //    pagination: false,
    //    navigation: true,
    //    center: false,
    //    autoplayTimeout: 4000,
    //    responsive: {
    //        0: {
    //            items: 1
    //        },
    //        600: {
    //            items: 1
    //        },
    //        1000: {
    //            items: 1
    //        }
    //    }
    //})
   
    //window.onscroll = function () {
    //    console.log(window.pageYOffset);
    //    var nav = document.getElementById('menu-header');
    //    if (window.pageYOffset > 100) {
    //        nav.classList.add("scrolled");
    //    } else {
    //        nav.classList.remove("scrolled");
    //    }
    //}


    // ===== Scroll to Top ==== 
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200); // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200); // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function () { // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0 // Scroll to top of body
        }, 500);
    });

    new WOW().init();

    //$('.slide-main4').owlCarousel({
    //    loop: true,
    //    margin: 10,
    //    dots: false,
    //    autoplay: true,
    //    autoplayTimeout: 2000,
    //    responsive: {
    //        0: {
    //            items: 1
    //        },
    //        600: {
    //            items: 2
    //        },
    //        1000: {
    //            items: 4
    //        }
    //    }
    //})
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    /*
	============================================================
	MENU
	============================================================
	*/
    //jQuery(".main-menu").meanmenu({
    //    meanMenuContainer: '.mobile-menu',
    //    meanScreenWidth: "991"
    //});

    /*
	============================================================
	MENU BAR
	============================================================
	*/
    //$('.menu-bar a').on('click', function () {
    //    $('.slide-menu-area').addClass('highlight');
    //    return false;
    //});
    //$('.slide-menu-area .close').on('click', function () {
    //    $('.slide-menu-area').removeClass('highlight');
    //    return false;
    //});
    /*
	============================================================
	HELPER
	============================================================
	*/
    //$('.fake-title').parent().css('position', 'relative');
    //$('.navigation .sub-menu').siblings('a').append("<i class='fa fa-angle-down'></i>");

    /*
	============================================================
	COUNT DOWN
	============================================================
	*/
    //$('.countdown').downCount({
    //    date: '12/12/2019 12:00:00',
    //    offset: +1
    //});
    /*
	============================================================
	BACKGROUND IMAGE
	============================================================
	*/
    //$('.bg-background-area').each(function () {
    //    "use strict";
    //    if ($(this).attr("data-bg")) {
    //        $(this).css({
    //            'background': 'url(' + $(this).data('bg') + ')',
    //            'background-size': 'cover',
    //            'background-repeat': 'no-repeat',
    //            'background-attachment': 'scroll',
    //            'background-position': 'center center'
    //        });
    //    }
    //});
    /*
	=======================================================================
	ISOTOPE MASONRY
	=======================================================================
	*/
    // if ($('.masonry').length) {
    //     $(".masonry").imagesLoaded(function () {
    //         $(".masonry").masonry();
    //     });
    // }
    // if ($('.filterable-gallery').length) {
    //     var fselector = 0,
    //itemsGrid = $(".filterable-gallery");
    //     (function ($) {
    //         "use strict";
    //         var isotopeMode;
    //         if (itemsGrid.hasClass("masonry")) {
    //             isotopeMode = "masonry";
    //         } else {
    //             isotopeMode = "fitRows"
    //         }
    //         itemsGrid.imagesLoaded(function () {
    //             itemsGrid.isotope({
    //                 itemSelector: '.mix',
    //                 layoutMode: isotopeMode,
    //                 filter: fselector
    //             });
    //         });
    //         $(".port-filter").on('click', '.filter', function () {
    //             $(".filter").removeClass("active");
    //             $(this).addClass("active");
    //             fselector = $(this).attr('data-filter');
    //             itemsGrid.isotope({
    //                 itemSelector: '.mix',
    //                 layoutMode: isotopeMode,
    //                 filter: fselector
    //             });
    //             return false;
    //         });
    //     })(jQuery);
    // }
    /*
	=======================================================================
	ALL SLIDERS START
	=======================================================================
	*/
    /*
    =======================================================================
    MAIN SLIDER
    =======================================================================
    */
    //$(".main-slider").owlCarousel({
    //    autoPlay: true,
    //    // slideSpeed:2000,
    //    pagination: false,
    //    navigation: true,
    //    items: 1,
    //    center: false,
    //    loop: false,
    //    navigationText: ["prev", "next"],
    //    itemsDesktop: [1199, 1],
    //    itemsDesktopSmall: [980, 1],
    //    itemsTablet: [768, 1],
    //    itemsTablet: [767, 1],
    //    itemsMobile: [479, 1],
    //});
    /*
    =======================================================================
    COURSES SLIDER
    =======================================================================
    */
    //$(".courses-slide").owlCarousel({
    //    autoplay: true,
    //    slideSpeed: 2000,
    //    pagination: false,
    //    margin: 20,
    //    nav: true,
    //    center: false,
    //    dots: false,
    //    navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    //    responsive: {
    //        992: {
    //            items: 3
    //        },
    //        768: {
    //            items: 2
    //        },
    //        479: {
    //            items: 1
    //        }
    //    }
    //});
    /*
    =======================================================================
    TESTIMONIAL SLIDER
    =======================================================================
    */
    //$(".testimonial-slide").owlCarousel({
    //    autoplay: true,
    //    slideSpeed: 2000,
    //    pagination: true,
    //    navigation: false,
    //    items: 3,
    //    center: true,
    //    loop: true,
    //    navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    //    itemsDesktop: [1199, 2],
    //    itemsDesktopSmall: [980, 2],
    //    itemsTablet: [768, 1],
    //    itemsMobile: [479, 1],
    //});
    /*
    =======================================================================
    BLOG SLIDER
    =======================================================================
    */
    //$(".blog-slider").owlCarousel({
    //    autoplay: true,
    //    slideSpeed: 2000,
    //    pagination: false,
    //    navigation: true,
    //    items: 1,
    //    navigationText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
    //    itemsDesktop: [1199, 1],
    //    itemsDesktopSmall: [980, 1],
    //    itemsTablet: [768, 1],
    //    itemsMobile: [479, 1],
    //});
    /*
    =======================================================================
    TESTIMONIAL SLIDER
    =======================================================================
    */
    //$(".testimon-slider").owlCarousel({
    //    autoplay: true,
    //    slideSpeed: 2000,
    //    pagination: false,
    //    navigation: true,
    //    items: 1,
    //    navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    //    itemsDesktop: [1199, 1],
    //    itemsDesktopSmall: [980, 1],
    //    itemsTablet: [768, 1],
    //    itemsMobile: [479, 1],
    //});
    /*
    =======================================================================
    PORTFOLIO SLIDER
    =======================================================================
    */
    //$(".ct-grid-portfolio-layout2").owlCarousel({
    //    center: false,
    //    items: 3,
    //    loop: true,
    //    padding: 50,
    //    responsive: {
    //        600: {
    //            items: 4
    //        }
    //    }
    //});
    /*
    =======================================================================
    PORTFOLIO SLIDER
    =======================================================================
    */
    //$(".ct-grid-portfolio-layout3").owlCarousel({
    //    center: false,
    //    items: 4,
    //    loop: true,
    //    padding: 50,
    //    responsive: {
    //        600: {
    //            items: 4
    //        }
    //    }
    //});

    /*
    =======================================================================
    STAFF SLIDER
    =======================================================================
    */
    //$(".staff-slide").owlCarousel({
    //    autoplay: true,
    //    slideSpeed: 2000,
    //    pagination: false,
    //    //navigation: true,
    //    margin: 20,
    //    items: 3,
    //    center: false,
    //    dots: false,
    //    nav: true,
    //    navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    //    responsive: {
    //        1199: {
    //            items: 3
    //        },
    //        980: {
    //            items: 2
    //        },
    //        768: {
    //            items: 2
    //        },
    //        479: {
    //            items: 1
    //        },
    //        319: {
    //            items: 1
    //        }
    //    },
    //    //itemsDesktop: [1199, 2],
    //    //itemsDesktopSmall: [980, 2],
    //    //itemsTablet: [768, 2],
    //    //itemsMobile: [479, 1],
    //});
    /*
    =======================================================================
    BRAND SLIDER
    =======================================================================
    */
    //$(".brand-slide").owlCarousel({
    //    autoplay: true,
    //    // slideSpeed:2000,
    //    pagination: false,
    //    nav: false,
    //    center: false,
    //    dots: false,
    //    navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    //    responsive: {
    //        1199: {
    //            items: 5
    //        },
    //        980: {
    //            items: 4
    //        },
    //        768: {
    //            items: 3
    //        },
    //        479: {
    //            items: 2
    //        },
    //        401: {
    //            items: 2
    //        }
    //    },
    //});
    /*
    =======================================================================
    SHOP SLIDER
    =======================================================================
    */
    //$(".shop-slider").owlCarousel({
    //    autoplay: true,
    //    // slideSpeed:2000,
    //    pagination: false,
    //    navigation: true,
    //    items: 4,
    //    center: false,
    //    loop: false,
    //    navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    //    itemsDesktop: [1199, 4],
    //    itemsDesktopSmall: [980, 3],
    //    itemsTablet: [768, 2],
    //    itemsMobile: [479, 2],
    //});
    /*
    =======================================================================
    SHOP DETAIL SLIDER
    =======================================================================
    */
    //$(".shop-detail-slider").owlCarousel({
    //    autoplay: true,
    //    // slideSpeed:2000,
    //    pagination: false,
    //    navigation: true,
    //    items: 1,
    //    center: false,
    //    loop: false,
    //    navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    //    itemsDesktop: [1199, 1],
    //    itemsDesktopSmall: [980, 1],
    //    itemsTablet: [768, 1],
    //    itemsMobile: [479, 1],
    //});
    /*
    =======================================================================
    STICKY FUNCTION
    =======================================================================
    */
    //$(window).on('scroll', function () {
    //    if ($(window).scrollTop() > 80) {
    //        $('#sticky').addClass('stick');
    //    } else {
    //        $('#sticky').removeClass('stick');
    //    }
    //});
    /*
    =======================================================================
    COUNTERUP
    =======================================================================
    */
    //$('.counter').counterUp({
    //    delay: 10,
    //    time: 3000
    //});
    /*
    =======================================================================
    MAGNIFICPOPUP
    =======================================================================
    */
    //if ($('.popup-youtube').length > 0) {
    //    $('.popup-youtube').magnificPopup({
    //        type: 'iframe',
    //        mainClass: 'mfp-fade',
    //        removalDelay: 160,
    //        preloader: false,
    //        fixedContentPos: false
    //    });
    //}
    /*
    =======================================================================
    CART PLUS MINUS BUTTON
    =======================================================================
    */
    //$(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
    //$(".qtybutton").on("click", function () {
    //    var $button = $(this);
    //    var oldValue = $button.parent().find("input").val();
    //    if ($button.text() == "+") {
    //        var newVal = parseFloat(oldValue) + 1;
    //    } else {
    //        // Don't allow decrementing below zero
    //        if (oldValue > 0) {
    //            var newVal = parseFloat(oldValue) - 1;
    //        } else {
    //            newVal = 0;
    //        }
    //    }
    //    $button.parent().find("input").val(newVal);
    //});
    /*
    =======================================================================
    NEWSLETTER
    =======================================================================
    */
//    $(function () {
//        'use strict';
//        var $form = $('#mc-embedded-subscribe-form');
//        $('#mc-embedded-subscribe').on('click', function (event) {
//            if (event) event.preventDefault();
//            register($form);
//        });
//    });
//    const ps = document.querySelectorAll('p');
//    const observer = new ResizeObserver(entries => {
//        for (let entry of entries) {
//            entry.target.classList[entry.target.scrollHeight > entry.contentRect.height ? 'add' : 'remove']('truncated');
//        }
//});

//ps.forEach(p => {
//    observer.observe(p);
//});
})(jQuery)

