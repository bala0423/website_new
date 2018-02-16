jQuery(document).ready(function () {

//Preloader active
    jQuery(window).load(function () {
        jQuery(".loaded").fadeOut();
        jQuery(".preloader").delay(1000).fadeOut("slow");
    });

// sidenav navbar nav
    jQuery(".button-collapse").sideNav();


// localScroll js
    jQuery(".navbar-desktop").localScroll();

// Counter 
    jQuery('.statistic-counter').counterUp({
        delay: 10,
        time: 2000
    });

// Mixitube
    jQuery('#mixcontent').mixItUp({
        animation: {
            animateResizeContainer: false,
            effects: 'fade rotateX(-45deg) translateY(-10%)'
        }
    });

// MagnificPopup
    jQuery('.gallery-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
    });

// Home slider
    jQuery('.slider').slider({full_width: true});

// client slider
    jQuery('.carousel').carousel();

// accordion

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function () {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        }
    }
    
// nav menu small menu
    jQuery(document).on("scroll", function () {
        if ($(document).scrollTop() > 120) {
            $("nav").addClass("large");
        } else {
            $("nav").removeClass("large");
        }
    });


});

    // -------------------------------------------------------------
    //  Modal Window
    // -------------------------------------------------------------

    (function () {


        $('#modal-window').on('click', 'div.modal-direction > a', function (e) {
            e.preventDefault();

            console.log($(this).attr('href'));

            var url = $(this).attr('href');
            $.get(url, function (data) {
                //    $('#modal-window-wrapper').addClass(modalClass);
                //    $('#modal-window-box .modal-loading').slideUp();
                //    $('#modal-window-content > div').hide().html(data).slideDown('slow');


                $('#modal-window-content > div > *').remove();
                $('#modal-window-box .modal-loading').slideDown();


                $('#modal-window-content > div').hide().html(data).slideDown('slow');
                $('#modal-window-box .modal-loading').slideUp();

            });


        });

    }());


    // ------------
    //  Modal
    // ------------

    (function () {

        var showModalWindow = function (element) {

            var url = $(element).attr('data-href') || $(element).attr('href');

            var modalClass = $(element).attr('data-modalclass');

            var basicMargin = 0;

            $('#modal-window').css('top', $(window).scrollTop() + basicMargin).addClass('show-modal');

            $('#modal-window-wrapper').removeClass();
            $.get(url, function (data) {
                $('#modal-window-wrapper').addClass(modalClass);
                $('#modal-window-box .modal-loading').slideUp();
                $('#modal-window-content > div').hide().html(data).slideDown('slow');
            });

        };


        var hideModalWindow = function (element) {

            $('#modal-window').css('top', 0).removeClass('show-modal');
            $('#modal-window-content > div').removeClass().html('').hide();
            $('#modal-window-content > div > *').remove();
            $('#modal-window-box .modal-loading').hide().delay(300).show();

        };

        $('[data-linktype="modal"]').on('click', function (e) {
            e.preventDefault();
            showModalWindow($(this));
        });


        $('#modal-window').on('click', '.close-window', function (e) {
            e.preventDefault();
            hideModalWindow();
        });


        $('.modal-overlay').on('click', function (e) {
            hideModalWindow();
        });


    }());