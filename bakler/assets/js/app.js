window.onload = init;

function init() {

    var production__item1 = $('.production__rotate1').ThreeSixty({
        height: 300,
        width: 320,
        framerate: 60,
        totalFrames: 32, // Total no. of image you have for 360 slider
        endFrame: 32, // end frame for the auto spin animation
        currentFrame: 1, // This the start frame for auto spin
        imgList: '.production_images-1', // selector for image list
        progress: '.spinner', // selector to show the loading progress
        imagePath: 'assets/img/3d/3d__1/', // path of the image assets
        filePrefix: '', // file prefix if any
        ext: '.jpg', // extention for the assets
        navigation: false,
        responsive: true
    });

    var production__item2 = $('.production__rotate2').ThreeSixty({
        height: 300,
        width: 320,
        framerate: 60,
        totalFrames: 32, // Total no. of image you have for 360 slider
        endFrame: 32, // end frame for the auto spin animation
        currentFrame: 1, // This the start frame for auto spin
        imgList: '.production_images-2', // selector for image list
        progress: '.spinner', // selector to show the loading progress
        imagePath: 'assets/img/3d/3d__2/', // path of the image assets
        filePrefix: '', // file prefix if any
        ext: '.jpg', // extention for the assets
        navigation: false,
        responsive: true
    });

    var production__item3 = $('.production__rotate3').ThreeSixty({
        height: 300,
        width: 320,
        framerate: 60,
        totalFrames: 32, // Total no. of image you have for 360 slider
        endFrame: 32, // end frame for the auto spin animation
        currentFrame: 1, // This the start frame for auto spin
        imgList: '.production_images-3', // selector for image list
        progress: '.spinner', // selector to show the loading progress
        imagePath: 'assets/img/3d/3d__3/', // path of the image assets
        filePrefix: '', // file prefix if any
        ext: '.jpg', // extention for the assets
        navigation: false,
        responsive: true
    });

    var production__item4 = $('.production__rotate4').ThreeSixty({
        height: 300,
        width: 320,
        framerate: 60,
        totalFrames: 32, // Total no. of image you have for 360 slider
        endFrame: 32, // end frame for the auto spin animation
        currentFrame: 1, // This the start frame for auto spin
        imgList: '.production_images-4', // selector for image list
        progress: '.spinner', // selector to show the loading progress
        imagePath: 'assets/img/3d/3d__1/', // path of the image assets
        filePrefix: '', // file prefix if any
        ext: '.jpg', // extention for the assets
        navigation: false,
        responsive: true
    });


}

function initMap() {
    var uluru = {lat: 51.663680, lng: 39.154583};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}


(function () {
    'use strict';


    var menu = (function () {

        var btn = $(".burger-menu"),
            menu = $(".header__mnu-list");

        var toggle = function () {
            btn.on('click', function () {
                menu.slideToggle();
                btn.toggleClass('menu-on');
            });

            $(window).resize(function () {
                var wid = $(window).width();
                if (wid > 990 && menu.is(":hidden")) {
                    menu.removeAttr('style');
                }
            });
        }

        var menuItem = $(".dropDown");

        var innerMnu = function () {
            menuItem.on('click', function () {
                $(this).children('.header__mnu-list-in').slideToggle();
            });
        };

        return {
            init: function () {
                toggle();
                innerMnu();
            }

        }
    })();

    menu.init();

    var _fixedMnu = function () {
        var scroll = window.pageYOffset,
            menu = $(".header__nav");

        if (scroll > 100) {
            menu.addClass("fixed");
        } else {
            menu.removeClass("fixed");
        }
    };

    window.onscroll = function () {
        _fixedMnu();
    };

    $(".header__mnu-link").on("click", function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 50;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $(".MrightSide__item").on("click", "a", function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 50;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $(".FSleftSide__btns").on("click", "a", function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 50;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $(".footer__mnu-list").on("click", "a", function (e) {
        var id = $(this).attr('href'),
            top = $(id).offset().top - 50;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $('.requires__item-text').on('click', function () {
        $('.requires__item-text-text', this).slideToggle();
        $(this).toggleClass('active');
    });




    $('.statistics').mouseenter(function () {
        $('#statistics__number-1').animateNumber({ number: 2 });
        $('#statistics__number-2').animateNumber({ number: 250 });
        $('#statistics__number-3').animateNumber({ number: 120 });
        $('#statistics__number-4').animateNumber({ number: 83 + '%' });
    });


    $(".requires__slider").slick({
        slidesToShow: 3,
        slideToScroll: 1,
        infinite: true,
        nextArrow: '<i class="fa fa-angle-right slider__arrow-left" aria-hidden="true"></i>',
        prevArrow: '<i class="fa fa-angle-left slider__arrow-right" aria-hidden="true"></i>',
        centerMode: true,
        centerPadding: '0px',
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    $(".share__slider").slick({
        dots: true,
        slidesToShow: 2,
        slideToScroll: 1,
        infinite: true,
        nextArrow: '<i class="fa fa-angle-right slider__arrow-left" aria-hidden="true"></i>',
        prevArrow: '<i class="fa fa-angle-left slider__arrow-right" aria-hidden="true"></i>',
        centerMode: false,
        centerPadding: '0px',
        autoplay: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false
            },
            breakpoint: 840,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }]
    });

    $(".production__slider").slick({
        slidesToShow: 3,
        slideToScroll: 1,
        infinite: false,
        initialSlide: 1,
        arrows: true,
        nextArrow: '<div class="production__arrow-right"><img src="assets/img/production__arrow.png" /></div>',
        prevArrow: '<div class="production__arrow-left"><img src="assets/img/production__arrow.png" /></div>',
        centerMode: true,
        centerPadding: '0px',
        swipe: false,
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    $('.certificates__slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: '<i class="fa fa-angle-right slider__arrow-left" aria-hidden="true"></i>',
        prevArrow: '<i class="fa fa-angle-left slider__arrow-right" aria-hidden="true"></i>',
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },  {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    $('.certificates .certificates__item').on('click', function () {
        var sID = $(this).children().attr("data-item"),
            pImg = $(".certificates-popup__item .certificates-popup__item-img",),
            pItem = $(".certificates-popup__item");
        for (var i = 0; i < pItem.length; i++) {
            var pID = $(pItem[i]).attr("data-item");
            if (sID == pID) {
                $(".certificates-popup").css({
                    "display": "block"
                });
                $(pItem[i]).css({
                    "display": "block"
                });

                $(pImg[i]).css({
                    "display": "block"
                });
            }
        }
    })

    $(".certificates-popup").on("click", function () {
        $(this).css({
            "display": "none"
        });

        $(".certificates-popup__item-img", this).css({
            "display": "none"
        });
    });

    //POPUP

    var slider__popup = (function () {

        var _show = function (container, name, btn) {

            var popupActive = $(".popup__wrap", container),
                btnClose = $(".btn-close, .production__popup-btn", container);

            btn.on('click', function (event) {
                event.preventDefault();

                var checkBtn = $(this).attr('data-item-' + name);

                for (var i = 0; i <= popupActive.length; i++) {
                    var checkPopup = $('[data-item-' + name + ' = ' + i + ']', container);

                    if (checkBtn == checkPopup.attr('data-item-' + name)) {
                        container.removeClass('hidden');
                        checkPopup.removeClass('hidden');
                    }
                }
            });

            btnClose.on('click', function (event) {
                event.preventDefault();
                popupActive.addClass('hidden');
                container.addClass('hidden');
            });
        }

        return {
            init: function () {
                _show($(".production__popup"), "production", $(".production__btn"));
                _show($(".share__popup"), "share", $(".share__slider-link"));
                _show($(".requires__popup"), "requires", $(".requires__btn"));
                _show($(".FScatalog"), "FScatalog", $(".FScatalog__btn"));
                _show($(".MrightSide5"), "MrightSide5", $(".MrightSide5_btn"));
                _show($(".MrightSide6"), "MrightSide6", $(".MrightSide6_btn"));
                _show($(".MrightSide7"), "MrightSide7", $(".MrightSide7_btn"));
                _show($(".MrightSide8"), "MrightSide8", $(".MrightSide8_btn"));
                _show($(".MrightSideStock"), "MrightSideStock", $(".MrightSide__btn"));
                _show($(".header__popup"), "header", $(".header__btn"));
                _show($(".FScatalog"), "FScatalog", $(".production__popup-btn"));
            }
        }
    })();

    slider__popup.init();

    var video = (function () {

        var _playFirst = function (item) {

            var video = $("video", item),
                hover = $(".team__list"),
                mainVideo = $(".team__item-video-main");

            hover.mouseenter(function () {
                for (var i = 0; i <= video.length - 1; i++) {

                    var videoCheck = video[i];


                    videoCheck.play();

                    // setTimeout(function () {
                    //     video.css('visibility', 'hidden');
                    //     mainVideo.css('visibility', 'visible');
                    //     $(mainVideo)[0].play();
                    // },19000)

                }

            });



        };

        return {
            init: function () {
                _playFirst($(".team__item"));
            }
        }
    })();

    video.init();
})();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93Lm9ubG9hZCA9IGluaXQ7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG5cclxuICAgIHZhciBwcm9kdWN0aW9uX19pdGVtMSA9ICQoJy5wcm9kdWN0aW9uX19yb3RhdGUxJykuVGhyZWVTaXh0eSh7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDAsXHJcbiAgICAgICAgd2lkdGg6IDMyMCxcclxuICAgICAgICBmcmFtZXJhdGU6IDYwLFxyXG4gICAgICAgIHRvdGFsRnJhbWVzOiAzMiwgLy8gVG90YWwgbm8uIG9mIGltYWdlIHlvdSBoYXZlIGZvciAzNjAgc2xpZGVyXHJcbiAgICAgICAgZW5kRnJhbWU6IDMyLCAvLyBlbmQgZnJhbWUgZm9yIHRoZSBhdXRvIHNwaW4gYW5pbWF0aW9uXHJcbiAgICAgICAgY3VycmVudEZyYW1lOiAxLCAvLyBUaGlzIHRoZSBzdGFydCBmcmFtZSBmb3IgYXV0byBzcGluXHJcbiAgICAgICAgaW1nTGlzdDogJy5wcm9kdWN0aW9uX2ltYWdlcy0xJywgLy8gc2VsZWN0b3IgZm9yIGltYWdlIGxpc3RcclxuICAgICAgICBwcm9ncmVzczogJy5zcGlubmVyJywgLy8gc2VsZWN0b3IgdG8gc2hvdyB0aGUgbG9hZGluZyBwcm9ncmVzc1xyXG4gICAgICAgIGltYWdlUGF0aDogJ2Fzc2V0cy9pbWcvM2QvM2RfXzEvJywgLy8gcGF0aCBvZiB0aGUgaW1hZ2UgYXNzZXRzXHJcbiAgICAgICAgZmlsZVByZWZpeDogJycsIC8vIGZpbGUgcHJlZml4IGlmIGFueVxyXG4gICAgICAgIGV4dDogJy5qcGcnLCAvLyBleHRlbnRpb24gZm9yIHRoZSBhc3NldHNcclxuICAgICAgICBuYXZpZ2F0aW9uOiBmYWxzZSxcclxuICAgICAgICByZXNwb25zaXZlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgcHJvZHVjdGlvbl9faXRlbTIgPSAkKCcucHJvZHVjdGlvbl9fcm90YXRlMicpLlRocmVlU2l4dHkoe1xyXG4gICAgICAgIGhlaWdodDogMzAwLFxyXG4gICAgICAgIHdpZHRoOiAzMjAsXHJcbiAgICAgICAgZnJhbWVyYXRlOiA2MCxcclxuICAgICAgICB0b3RhbEZyYW1lczogMzIsIC8vIFRvdGFsIG5vLiBvZiBpbWFnZSB5b3UgaGF2ZSBmb3IgMzYwIHNsaWRlclxyXG4gICAgICAgIGVuZEZyYW1lOiAzMiwgLy8gZW5kIGZyYW1lIGZvciB0aGUgYXV0byBzcGluIGFuaW1hdGlvblxyXG4gICAgICAgIGN1cnJlbnRGcmFtZTogMSwgLy8gVGhpcyB0aGUgc3RhcnQgZnJhbWUgZm9yIGF1dG8gc3BpblxyXG4gICAgICAgIGltZ0xpc3Q6ICcucHJvZHVjdGlvbl9pbWFnZXMtMicsIC8vIHNlbGVjdG9yIGZvciBpbWFnZSBsaXN0XHJcbiAgICAgICAgcHJvZ3Jlc3M6ICcuc3Bpbm5lcicsIC8vIHNlbGVjdG9yIHRvIHNob3cgdGhlIGxvYWRpbmcgcHJvZ3Jlc3NcclxuICAgICAgICBpbWFnZVBhdGg6ICdhc3NldHMvaW1nLzNkLzNkX18yLycsIC8vIHBhdGggb2YgdGhlIGltYWdlIGFzc2V0c1xyXG4gICAgICAgIGZpbGVQcmVmaXg6ICcnLCAvLyBmaWxlIHByZWZpeCBpZiBhbnlcclxuICAgICAgICBleHQ6ICcuanBnJywgLy8gZXh0ZW50aW9uIGZvciB0aGUgYXNzZXRzXHJcbiAgICAgICAgbmF2aWdhdGlvbjogZmFsc2UsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHByb2R1Y3Rpb25fX2l0ZW0zID0gJCgnLnByb2R1Y3Rpb25fX3JvdGF0ZTMnKS5UaHJlZVNpeHR5KHtcclxuICAgICAgICBoZWlnaHQ6IDMwMCxcclxuICAgICAgICB3aWR0aDogMzIwLFxyXG4gICAgICAgIGZyYW1lcmF0ZTogNjAsXHJcbiAgICAgICAgdG90YWxGcmFtZXM6IDMyLCAvLyBUb3RhbCBuby4gb2YgaW1hZ2UgeW91IGhhdmUgZm9yIDM2MCBzbGlkZXJcclxuICAgICAgICBlbmRGcmFtZTogMzIsIC8vIGVuZCBmcmFtZSBmb3IgdGhlIGF1dG8gc3BpbiBhbmltYXRpb25cclxuICAgICAgICBjdXJyZW50RnJhbWU6IDEsIC8vIFRoaXMgdGhlIHN0YXJ0IGZyYW1lIGZvciBhdXRvIHNwaW5cclxuICAgICAgICBpbWdMaXN0OiAnLnByb2R1Y3Rpb25faW1hZ2VzLTMnLCAvLyBzZWxlY3RvciBmb3IgaW1hZ2UgbGlzdFxyXG4gICAgICAgIHByb2dyZXNzOiAnLnNwaW5uZXInLCAvLyBzZWxlY3RvciB0byBzaG93IHRoZSBsb2FkaW5nIHByb2dyZXNzXHJcbiAgICAgICAgaW1hZ2VQYXRoOiAnYXNzZXRzL2ltZy8zZC8zZF9fMy8nLCAvLyBwYXRoIG9mIHRoZSBpbWFnZSBhc3NldHNcclxuICAgICAgICBmaWxlUHJlZml4OiAnJywgLy8gZmlsZSBwcmVmaXggaWYgYW55XHJcbiAgICAgICAgZXh0OiAnLmpwZycsIC8vIGV4dGVudGlvbiBmb3IgdGhlIGFzc2V0c1xyXG4gICAgICAgIG5hdmlnYXRpb246IGZhbHNlLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBwcm9kdWN0aW9uX19pdGVtNCA9ICQoJy5wcm9kdWN0aW9uX19yb3RhdGU0JykuVGhyZWVTaXh0eSh7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDAsXHJcbiAgICAgICAgd2lkdGg6IDMyMCxcclxuICAgICAgICBmcmFtZXJhdGU6IDYwLFxyXG4gICAgICAgIHRvdGFsRnJhbWVzOiAzMiwgLy8gVG90YWwgbm8uIG9mIGltYWdlIHlvdSBoYXZlIGZvciAzNjAgc2xpZGVyXHJcbiAgICAgICAgZW5kRnJhbWU6IDMyLCAvLyBlbmQgZnJhbWUgZm9yIHRoZSBhdXRvIHNwaW4gYW5pbWF0aW9uXHJcbiAgICAgICAgY3VycmVudEZyYW1lOiAxLCAvLyBUaGlzIHRoZSBzdGFydCBmcmFtZSBmb3IgYXV0byBzcGluXHJcbiAgICAgICAgaW1nTGlzdDogJy5wcm9kdWN0aW9uX2ltYWdlcy00JywgLy8gc2VsZWN0b3IgZm9yIGltYWdlIGxpc3RcclxuICAgICAgICBwcm9ncmVzczogJy5zcGlubmVyJywgLy8gc2VsZWN0b3IgdG8gc2hvdyB0aGUgbG9hZGluZyBwcm9ncmVzc1xyXG4gICAgICAgIGltYWdlUGF0aDogJ2Fzc2V0cy9pbWcvM2QvM2RfXzEvJywgLy8gcGF0aCBvZiB0aGUgaW1hZ2UgYXNzZXRzXHJcbiAgICAgICAgZmlsZVByZWZpeDogJycsIC8vIGZpbGUgcHJlZml4IGlmIGFueVxyXG4gICAgICAgIGV4dDogJy5qcGcnLCAvLyBleHRlbnRpb24gZm9yIHRoZSBhc3NldHNcclxuICAgICAgICBuYXZpZ2F0aW9uOiBmYWxzZSxcclxuICAgICAgICByZXNwb25zaXZlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0TWFwKCkge1xyXG4gICAgdmFyIHVsdXJ1ID0ge2xhdDogNTEuNjYzNjgwLCBsbmc6IDM5LjE1NDU4M307XHJcbiAgICB2YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcclxuICAgICAgICB6b29tOiAxMixcclxuICAgICAgICBjZW50ZXI6IHVsdXJ1XHJcbiAgICB9KTtcclxuICAgIHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgICBwb3NpdGlvbjogdWx1cnUsXHJcbiAgICAgICAgbWFwOiBtYXBcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcblxyXG4gICAgdmFyIG1lbnUgPSAoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB2YXIgYnRuID0gJChcIi5idXJnZXItbWVudVwiKSxcclxuICAgICAgICAgICAgbWVudSA9ICQoXCIuaGVhZGVyX19tbnUtbGlzdFwiKTtcclxuXHJcbiAgICAgICAgdmFyIHRvZ2dsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYnRuLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIG1lbnUuc2xpZGVUb2dnbGUoKTtcclxuICAgICAgICAgICAgICAgIGJ0bi50b2dnbGVDbGFzcygnbWVudS1vbicpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHdpZCA9ICQod2luZG93KS53aWR0aCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHdpZCA+IDk5MCAmJiBtZW51LmlzKFwiOmhpZGRlblwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lbnUucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbWVudUl0ZW0gPSAkKFwiLmRyb3BEb3duXCIpO1xyXG5cclxuICAgICAgICB2YXIgaW5uZXJNbnUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJy5oZWFkZXJfX21udS1saXN0LWluJykuc2xpZGVUb2dnbGUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlKCk7XHJcbiAgICAgICAgICAgICAgICBpbm5lck1udSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pKCk7XHJcblxyXG4gICAgbWVudS5pbml0KCk7XHJcblxyXG4gICAgdmFyIF9maXhlZE1udSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0LFxyXG4gICAgICAgICAgICBtZW51ID0gJChcIi5oZWFkZXJfX25hdlwiKTtcclxuXHJcbiAgICAgICAgaWYgKHNjcm9sbCA+IDEwMCkge1xyXG4gICAgICAgICAgICBtZW51LmFkZENsYXNzKFwiZml4ZWRcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWVudS5yZW1vdmVDbGFzcyhcImZpeGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIF9maXhlZE1udSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkKFwiLmhlYWRlcl9fbW51LWxpbmtcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKSxcclxuICAgICAgICAgICAgdG9wID0gJChpZCkub2Zmc2V0KCkudG9wIC0gNTA7XHJcbiAgICAgICAgJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiB0b3B9LCAxNTAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIuTXJpZ2h0U2lkZV9faXRlbVwiKS5vbihcImNsaWNrXCIsIFwiYVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKSxcclxuICAgICAgICAgICAgdG9wID0gJChpZCkub2Zmc2V0KCkudG9wIC0gNTA7XHJcbiAgICAgICAgJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiB0b3B9LCAxNTAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIuRlNsZWZ0U2lkZV9fYnRuc1wiKS5vbihcImNsaWNrXCIsIFwiYVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKSxcclxuICAgICAgICAgICAgdG9wID0gJChpZCkub2Zmc2V0KCkudG9wIC0gNTA7XHJcbiAgICAgICAgJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiB0b3B9LCAxNTAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIuZm9vdGVyX19tbnUtbGlzdFwiKS5vbihcImNsaWNrXCIsIFwiYVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciBpZCA9ICQodGhpcykuYXR0cignaHJlZicpLFxyXG4gICAgICAgICAgICB0b3AgPSAkKGlkKS5vZmZzZXQoKS50b3AgLSA1MDtcclxuICAgICAgICAkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtzY3JvbGxUb3A6IHRvcH0sIDE1MDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLnJlcXVpcmVzX19pdGVtLXRleHQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLnJlcXVpcmVzX19pdGVtLXRleHQtdGV4dCcsIHRoaXMpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAkKCcuc3RhdGlzdGljcycpLm1vdXNlZW50ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJyNzdGF0aXN0aWNzX19udW1iZXItMScpLmFuaW1hdGVOdW1iZXIoeyBudW1iZXI6IDIgfSk7XHJcbiAgICAgICAgJCgnI3N0YXRpc3RpY3NfX251bWJlci0yJykuYW5pbWF0ZU51bWJlcih7IG51bWJlcjogMjUwIH0pO1xyXG4gICAgICAgICQoJyNzdGF0aXN0aWNzX19udW1iZXItMycpLmFuaW1hdGVOdW1iZXIoeyBudW1iZXI6IDEyMCB9KTtcclxuICAgICAgICAkKCcjc3RhdGlzdGljc19fbnVtYmVyLTQnKS5hbmltYXRlTnVtYmVyKHsgbnVtYmVyOiA4MyArICclJyB9KTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAkKFwiLnJlcXVpcmVzX19zbGlkZXJcIikuc2xpY2soe1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICBzbGlkZVRvU2Nyb2xsOiAxLFxyXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgIG5leHRBcnJvdzogJzxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtcmlnaHQgc2xpZGVyX19hcnJvdy1sZWZ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPicsXHJcbiAgICAgICAgcHJldkFycm93OiAnPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1sZWZ0IHNsaWRlcl9fYXJyb3ctcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+JyxcclxuICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgIGNlbnRlclBhZGRpbmc6ICcwcHgnLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IFt7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDYwMCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfV1cclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIuc2hhcmVfX3NsaWRlclwiKS5zbGljayh7XHJcbiAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgc2xpZGVUb1Njcm9sbDogMSxcclxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICBuZXh0QXJyb3c6ICc8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLXJpZ2h0IHNsaWRlcl9fYXJyb3ctbGVmdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4nLFxyXG4gICAgICAgIHByZXZBcnJvdzogJzxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtbGVmdCBzbGlkZXJfX2Fycm93LXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPicsXHJcbiAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgY2VudGVyUGFkZGluZzogJzBweCcsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogW3tcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBicmVha3BvaW50OiA4NDAsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XVxyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi5wcm9kdWN0aW9uX19zbGlkZXJcIikuc2xpY2soe1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICBzbGlkZVRvU2Nyb2xsOiAxLFxyXG4gICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICBpbml0aWFsU2xpZGU6IDEsXHJcbiAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgIG5leHRBcnJvdzogJzxkaXYgY2xhc3M9XCJwcm9kdWN0aW9uX19hcnJvdy1yaWdodFwiPjxpbWcgc3JjPVwiYXNzZXRzL2ltZy9wcm9kdWN0aW9uX19hcnJvdy5wbmdcIiAvPjwvZGl2PicsXHJcbiAgICAgICAgcHJldkFycm93OiAnPGRpdiBjbGFzcz1cInByb2R1Y3Rpb25fX2Fycm93LWxlZnRcIj48aW1nIHNyYz1cImFzc2V0cy9pbWcvcHJvZHVjdGlvbl9fYXJyb3cucG5nXCIgLz48L2Rpdj4nLFxyXG4gICAgICAgIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICAgICAgY2VudGVyUGFkZGluZzogJzBweCcsXHJcbiAgICAgICAgc3dpcGU6IGZhbHNlLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IFt7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfV1cclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5jZXJ0aWZpY2F0ZXNfX3NsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICBzcGVlZDogMzAwLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICBuZXh0QXJyb3c6ICc8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLXJpZ2h0IHNsaWRlcl9fYXJyb3ctbGVmdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4nLFxyXG4gICAgICAgIHByZXZBcnJvdzogJzxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtbGVmdCBzbGlkZXJfX2Fycm93LXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPicsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogW3tcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA2MDAsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA0ODAsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfV1cclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5jZXJ0aWZpY2F0ZXMgLmNlcnRpZmljYXRlc19faXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc0lEID0gJCh0aGlzKS5jaGlsZHJlbigpLmF0dHIoXCJkYXRhLWl0ZW1cIiksXHJcbiAgICAgICAgICAgIHBJbWcgPSAkKFwiLmNlcnRpZmljYXRlcy1wb3B1cF9faXRlbSAuY2VydGlmaWNhdGVzLXBvcHVwX19pdGVtLWltZ1wiLCksXHJcbiAgICAgICAgICAgIHBJdGVtID0gJChcIi5jZXJ0aWZpY2F0ZXMtcG9wdXBfX2l0ZW1cIik7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwSXRlbS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgcElEID0gJChwSXRlbVtpXSkuYXR0cihcImRhdGEtaXRlbVwiKTtcclxuICAgICAgICAgICAgaWYgKHNJRCA9PSBwSUQpIHtcclxuICAgICAgICAgICAgICAgICQoXCIuY2VydGlmaWNhdGVzLXBvcHVwXCIpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAkKHBJdGVtW2ldKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICQocEltZ1tpXSkuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgJChcIi5jZXJ0aWZpY2F0ZXMtcG9wdXBcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jc3Moe1xyXG4gICAgICAgICAgICBcImRpc3BsYXlcIjogXCJub25lXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChcIi5jZXJ0aWZpY2F0ZXMtcG9wdXBfX2l0ZW0taW1nXCIsIHRoaXMpLmNzcyh7XHJcbiAgICAgICAgICAgIFwiZGlzcGxheVwiOiBcIm5vbmVcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9QT1BVUFxyXG5cclxuICAgIHZhciBzbGlkZXJfX3BvcHVwID0gKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdmFyIF9zaG93ID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgbmFtZSwgYnRuKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgcG9wdXBBY3RpdmUgPSAkKFwiLnBvcHVwX193cmFwXCIsIGNvbnRhaW5lciksXHJcbiAgICAgICAgICAgICAgICBidG5DbG9zZSA9ICQoXCIuYnRuLWNsb3NlLCAucHJvZHVjdGlvbl9fcG9wdXAtYnRuXCIsIGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICBidG4ub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBjaGVja0J0biA9ICQodGhpcykuYXR0cignZGF0YS1pdGVtLScgKyBuYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBwb3B1cEFjdGl2ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGVja1BvcHVwID0gJCgnW2RhdGEtaXRlbS0nICsgbmFtZSArICcgPSAnICsgaSArICddJywgY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrQnRuID09IGNoZWNrUG9wdXAuYXR0cignZGF0YS1pdGVtLScgKyBuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja1BvcHVwLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgYnRuQ2xvc2Uub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgcG9wdXBBY3RpdmUuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBfc2hvdygkKFwiLnByb2R1Y3Rpb25fX3BvcHVwXCIpLCBcInByb2R1Y3Rpb25cIiwgJChcIi5wcm9kdWN0aW9uX19idG5cIikpO1xyXG4gICAgICAgICAgICAgICAgX3Nob3coJChcIi5zaGFyZV9fcG9wdXBcIiksIFwic2hhcmVcIiwgJChcIi5zaGFyZV9fc2xpZGVyLWxpbmtcIikpO1xyXG4gICAgICAgICAgICAgICAgX3Nob3coJChcIi5yZXF1aXJlc19fcG9wdXBcIiksIFwicmVxdWlyZXNcIiwgJChcIi5yZXF1aXJlc19fYnRuXCIpKTtcclxuICAgICAgICAgICAgICAgIF9zaG93KCQoXCIuRlNjYXRhbG9nXCIpLCBcIkZTY2F0YWxvZ1wiLCAkKFwiLkZTY2F0YWxvZ19fYnRuXCIpKTtcclxuICAgICAgICAgICAgICAgIF9zaG93KCQoXCIuTXJpZ2h0U2lkZTVcIiksIFwiTXJpZ2h0U2lkZTVcIiwgJChcIi5NcmlnaHRTaWRlNV9idG5cIikpO1xyXG4gICAgICAgICAgICAgICAgX3Nob3coJChcIi5NcmlnaHRTaWRlNlwiKSwgXCJNcmlnaHRTaWRlNlwiLCAkKFwiLk1yaWdodFNpZGU2X2J0blwiKSk7XHJcbiAgICAgICAgICAgICAgICBfc2hvdygkKFwiLk1yaWdodFNpZGU3XCIpLCBcIk1yaWdodFNpZGU3XCIsICQoXCIuTXJpZ2h0U2lkZTdfYnRuXCIpKTtcclxuICAgICAgICAgICAgICAgIF9zaG93KCQoXCIuTXJpZ2h0U2lkZThcIiksIFwiTXJpZ2h0U2lkZThcIiwgJChcIi5NcmlnaHRTaWRlOF9idG5cIikpO1xyXG4gICAgICAgICAgICAgICAgX3Nob3coJChcIi5NcmlnaHRTaWRlU3RvY2tcIiksIFwiTXJpZ2h0U2lkZVN0b2NrXCIsICQoXCIuTXJpZ2h0U2lkZV9fYnRuXCIpKTtcclxuICAgICAgICAgICAgICAgIF9zaG93KCQoXCIuaGVhZGVyX19wb3B1cFwiKSwgXCJoZWFkZXJcIiwgJChcIi5oZWFkZXJfX2J0blwiKSk7XHJcbiAgICAgICAgICAgICAgICBfc2hvdygkKFwiLkZTY2F0YWxvZ1wiKSwgXCJGU2NhdGFsb2dcIiwgJChcIi5wcm9kdWN0aW9uX19wb3B1cC1idG5cIikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSkoKTtcclxuXHJcbiAgICBzbGlkZXJfX3BvcHVwLmluaXQoKTtcclxuXHJcbiAgICB2YXIgdmlkZW8gPSAoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB2YXIgX3BsYXlGaXJzdCA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgdmlkZW8gPSAkKFwidmlkZW9cIiwgaXRlbSksXHJcbiAgICAgICAgICAgICAgICBob3ZlciA9ICQoXCIudGVhbV9fbGlzdFwiKSxcclxuICAgICAgICAgICAgICAgIG1haW5WaWRlbyA9ICQoXCIudGVhbV9faXRlbS12aWRlby1tYWluXCIpO1xyXG5cclxuICAgICAgICAgICAgaG92ZXIubW91c2VlbnRlcihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSB2aWRlby5sZW5ndGggLSAxOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZpZGVvQ2hlY2sgPSB2aWRlb1tpXTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvQ2hlY2sucGxheSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdmlkZW8uY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBtYWluVmlkZW8uY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgJChtYWluVmlkZW8pWzBdLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9LDE5MDAwKVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIF9wbGF5Rmlyc3QoJChcIi50ZWFtX19pdGVtXCIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pKCk7XHJcblxyXG4gICAgdmlkZW8uaW5pdCgpO1xyXG59KSgpO1xyXG4iXX0=
