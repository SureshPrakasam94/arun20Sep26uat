
    /* ==============================
       ACTIVE NAVIGATION
    =============================== */

    $(window).on("scroll", function () {

        var scrollPosition = $(window).scrollTop() + 100;

        $("section[id]").each(function () {

            var sectionTop = $(this).offset().top;
            var sectionHeight = $(this).outerHeight();
            var sectionId = $(this).attr("id");

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {

                $(".navbar-nav .nav-link").removeClass("active");

                $('.navbar-nav .nav-link[href="#' + sectionId + '"]')
                    .addClass("active");

            }

        });

    });

/* =================================
   AOS INITIALIZATION
================================= */

$(document).ready(function () {
    AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true,
        offset: 100
    });
});
/* =================================
   NAVBAR SCROLL EFFECT
================================= */
$(window).on("scroll", function () {
    $(".navbar").toggleClass(
        "scrolled",
        $(this).scrollTop() > 50
    );
});
/* =================================
   CLOSE MOBILE MENU AFTER CLICK
================================= */
$(".navbar-nav .nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
});






$(document).ready(function () {


    /*
    =================================
    GALLERY CAROUSEL
    =================================
    */

    $('.gallery-slider').owlCarousel({

        loop: true,

        margin: 20,

        nav: true,

        dots: false,

        autoplay: true,

        autoplayTimeout: 3000,

        autoplayHoverPause: true,

        smartSpeed: 800,

        responsive: {

            0: {

                items: 1

            },

            576: {

                items: 2

            }

        }

    });


    /*
    =================================
    GLIGHTBOX
    =================================
    */

    const lightbox = GLightbox({

        selector: '.glightbox'

    });

});


$(document).ready(function () {


    /*
    =================================
    INITIALIZE AOS
    =================================
    */

    AOS.init({

        duration: 800,

        easing: 'ease-in-out',

        once: true,

        offset: 100

    });


    /*
    =================================
    BACK TO TOP
    =================================
    */

    $(window).on('scroll', function () {

        if ($(this).scrollTop() > 300) {

            $('.back-to-top').addClass('show');

        } else {

            $('.back-to-top').removeClass('show');

        }

    });


});


$(window).on('scroll', function () {

    if ($(this).scrollTop() > 300) {

        $('.back-to-top').addClass('show');

    } else {

        $('.back-to-top').removeClass('show');

    }

});



/* ==============================
   PRODUCT DETAILS MODAL
============================== */

$(".productDetails").on("click", function () {

    const button = $(this);

    // Get product data
    const title = button.data("title");
    const image = button.data("image");
    const description = button.data("description");
    const label = button.data("label");
    const features = button.data("features").split("|");


    // Set modal content
    $("#modalProductTitle").text(title);

    $("#modalProductImage")
        .attr("src", image)
        .attr("alt", title);

    $("#modalProductDescription").text(description);

    $("#modalProductLabel").text(label);


    // Clear old features
    $("#modalProductFeatures").empty();


    // Add new features
    $.each(features, function (index, feature) {

        $("#modalProductFeatures").append(`
            <li>
                <i class="fa-solid fa-check"></i>
                ${feature}
            </li>
        `);

    });

});