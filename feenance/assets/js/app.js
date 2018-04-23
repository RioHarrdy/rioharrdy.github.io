"use strict";

(function () {
    //header-mnu
    $(".burger").on("click", function () {
        $(".main-mnu__list").slideToggle();
        $(".burger").toggleClass("burger-active");
    });

    var topMnu = function () {

        var _fixedMnu = function () {
            var scroll = window.pageYOffset,
                menu = $(".main-mnu");

            if (scroll > 100) {
                menu.addClass("fixed animated fadeInDown");
            } else {
                menu.removeClass("fixed animated fadeInDown");
            }
        };


        return {
            init: _fixedMnu
        }

    }();

    window.onscroll = function () {
        topMnu.init()
    };

    $(".main-mnu").on("click", "a", function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });


    //input phone mask

    $(".phone").mask("+7 (999) 999-99-99");

    //toggleInputTime

    var tgglInput = function () {

        var _tggl = function () {
            var btnOff = $(".on-input"),
                btnOn = $(".off-input"),
                tgglInput = $(".nm");

            btnOn.on("click", function (e) {
                e.preventDefault();

                tgglInput.slideUp();
                $(this).addClass("active");
                btnOff.removeClass("active");
            })

            btnOff.on("click", function (e) {
                e.preventDefault();

                tgglInput.slideDown();
                $(this).addClass("active");
                btnOn.removeClass("active");
            })
        };

        return {
            init: _tggl
        }
    }();

    tgglInput.init();
    //first slider

    $(".story__slider").slick({
        touchThreshold: 0,
        touchMove: false,
        prevArrow: '<img src="assets/img/story-prev.png" alt="prev" class="prev">',
        nextArrow: '<img src="assets/img/story-next.png" alt="next" class="next">'
    });

    //second slider

    $(".recomendation__slider").slick({
        touchThreshold: 0,
        touchMove: false,
        prevArrow: '<img src="assets/img/recomendation-prev.png" alt="prev" class="prev">',
        nextArrow: '<img src="assets/img/recomendation-next.png" alt="next" class="next">'
    });

    //popup

    var popup = function () {

        var _showPopup = function (container) {

            var pop = $(".popup", container),
                close = $(".btn-close", pop),
                btn = $(".show-popup", container);

            btn.on("click", function () {
                pop.removeClass("hidden");
            });

            close.on("click", function (e) {
                e.preventDefault();
                pop.addClass("hidden");
            });

        };


        return {
            init: _showPopup
        }
    }();

    popup.init($(".header-info"));
    popup.init($(".contact__list"));
    popup.init($(".recomendation"));
    popup.init($(".sucess"));
    popup.init($(".header-content"));
    popup.init($(".popup-conf"));
    popup.init($(".popup-ofert"));


    $(".sucess .button").on("click", function () {
        $(".sucess .popup").addClass("hidden");
    });

    //showNews

    var news = function () {

        var _showNews = function (container) {

            var btn = $(".news__link", container);

            btn.on("click", function () {

                $(this).siblings(".news__text-hidden").slideToggle();

                $.fn.toggleText = function(t1, t2){
                    if (this.text() == t1) this.text(t2);
                    else                   this.text(t1);
                    return this;
                };

                    $(this).toggleText('Подробнее', 'Свернуть');
            })

        };

        return {
            init: _showNews
        }
    }();

    news.init($(".news__item"))


    //MAP

    var map;

    DG.then(function () {
        map = DG.map('map', {
            center: [54.980494, 82.898010],
            zoom: 17,
            scrollWheelZoom: false
        });

        DG.marker([54.980494, 82.898010]).addTo(map);
    });


    //send forms

    $(".form").submit(function (e) { //устанавливаем событие отправки для формы
        e.preventDefault();
        var form_data = $(this).serialize(); //собераем все данные из формы
        $.ajax({
            type: "POST", //Метод отправки
            url: "send.php", //путь до php файла отправителя
            data: form_data,
            success: function (data) {

                console.log(data);
                //код в этом блоке выполняется при успешной отправке сообщения
                $(".sucess .popup").removeClass("hidden");
            }
        });
    });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICAvL2hlYWRlci1tbnVcclxuICAgICQoXCIuYnVyZ2VyXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIubWFpbi1tbnVfX2xpc3RcIikuc2xpZGVUb2dnbGUoKTtcclxuICAgICAgICAkKFwiLmJ1cmdlclwiKS50b2dnbGVDbGFzcyhcImJ1cmdlci1hY3RpdmVcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgdG9wTW51ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB2YXIgX2ZpeGVkTW51ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgc2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0LFxyXG4gICAgICAgICAgICAgICAgbWVudSA9ICQoXCIubWFpbi1tbnVcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2Nyb2xsID4gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICBtZW51LmFkZENsYXNzKFwiZml4ZWQgYW5pbWF0ZWQgZmFkZUluRG93blwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG1lbnUucmVtb3ZlQ2xhc3MoXCJmaXhlZCBhbmltYXRlZCBmYWRlSW5Eb3duXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGluaXQ6IF9maXhlZE1udVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KCk7XHJcblxyXG4gICAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRvcE1udS5pbml0KClcclxuICAgIH07XHJcblxyXG4gICAgJChcIi5tYWluLW1udVwiKS5vbihcImNsaWNrXCIsIFwiYVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKSxcclxuICAgICAgICAgICAgdG9wID0gJChpZCkub2Zmc2V0KCkudG9wO1xyXG4gICAgICAgICQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe3Njcm9sbFRvcDogdG9wfSwgMTUwMCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLy9pbnB1dCBwaG9uZSBtYXNrXHJcblxyXG4gICAgJChcIi5waG9uZVwiKS5tYXNrKFwiKzcgKDk5OSkgOTk5LTk5LTk5XCIpO1xyXG5cclxuICAgIC8vdG9nZ2xlSW5wdXRUaW1lXHJcblxyXG4gICAgdmFyIHRnZ2xJbnB1dCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdmFyIF90Z2dsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYnRuT2ZmID0gJChcIi5vbi1pbnB1dFwiKSxcclxuICAgICAgICAgICAgICAgIGJ0bk9uID0gJChcIi5vZmYtaW5wdXRcIiksXHJcbiAgICAgICAgICAgICAgICB0Z2dsSW5wdXQgPSAkKFwiLm5tXCIpO1xyXG5cclxuICAgICAgICAgICAgYnRuT24ub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRnZ2xJbnB1dC5zbGlkZVVwKCk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgYnRuT2ZmLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgYnRuT2ZmLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0Z2dsSW5wdXQuc2xpZGVEb3duKCk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgYnRuT24ucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaW5pdDogX3RnZ2xcclxuICAgICAgICB9XHJcbiAgICB9KCk7XHJcblxyXG4gICAgdGdnbElucHV0LmluaXQoKTtcclxuICAgIC8vZmlyc3Qgc2xpZGVyXHJcblxyXG4gICAgJChcIi5zdG9yeV9fc2xpZGVyXCIpLnNsaWNrKHtcclxuICAgICAgICB0b3VjaFRocmVzaG9sZDogMCxcclxuICAgICAgICB0b3VjaE1vdmU6IGZhbHNlLFxyXG4gICAgICAgIHByZXZBcnJvdzogJzxpbWcgc3JjPVwiYXNzZXRzL2ltZy9zdG9yeS1wcmV2LnBuZ1wiIGFsdD1cInByZXZcIiBjbGFzcz1cInByZXZcIj4nLFxyXG4gICAgICAgIG5leHRBcnJvdzogJzxpbWcgc3JjPVwiYXNzZXRzL2ltZy9zdG9yeS1uZXh0LnBuZ1wiIGFsdD1cIm5leHRcIiBjbGFzcz1cIm5leHRcIj4nXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL3NlY29uZCBzbGlkZXJcclxuXHJcbiAgICAkKFwiLnJlY29tZW5kYXRpb25fX3NsaWRlclwiKS5zbGljayh7XHJcbiAgICAgICAgdG91Y2hUaHJlc2hvbGQ6IDAsXHJcbiAgICAgICAgdG91Y2hNb3ZlOiBmYWxzZSxcclxuICAgICAgICBwcmV2QXJyb3c6ICc8aW1nIHNyYz1cImFzc2V0cy9pbWcvcmVjb21lbmRhdGlvbi1wcmV2LnBuZ1wiIGFsdD1cInByZXZcIiBjbGFzcz1cInByZXZcIj4nLFxyXG4gICAgICAgIG5leHRBcnJvdzogJzxpbWcgc3JjPVwiYXNzZXRzL2ltZy9yZWNvbWVuZGF0aW9uLW5leHQucG5nXCIgYWx0PVwibmV4dFwiIGNsYXNzPVwibmV4dFwiPidcclxuICAgIH0pO1xyXG5cclxuICAgIC8vcG9wdXBcclxuXHJcbiAgICB2YXIgcG9wdXAgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHZhciBfc2hvd1BvcHVwID0gZnVuY3Rpb24gKGNvbnRhaW5lcikge1xyXG5cclxuICAgICAgICAgICAgdmFyIHBvcCA9ICQoXCIucG9wdXBcIiwgY29udGFpbmVyKSxcclxuICAgICAgICAgICAgICAgIGNsb3NlID0gJChcIi5idG4tY2xvc2VcIiwgcG9wKSxcclxuICAgICAgICAgICAgICAgIGJ0biA9ICQoXCIuc2hvdy1wb3B1cFwiLCBjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgYnRuLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcG9wLnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNsb3NlLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHBvcC5hZGRDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpbml0OiBfc2hvd1BvcHVwXHJcbiAgICAgICAgfVxyXG4gICAgfSgpO1xyXG5cclxuICAgIHBvcHVwLmluaXQoJChcIi5oZWFkZXItaW5mb1wiKSk7XHJcbiAgICBwb3B1cC5pbml0KCQoXCIuY29udGFjdF9fbGlzdFwiKSk7XHJcbiAgICBwb3B1cC5pbml0KCQoXCIucmVjb21lbmRhdGlvblwiKSk7XHJcbiAgICBwb3B1cC5pbml0KCQoXCIuc3VjZXNzXCIpKTtcclxuICAgIHBvcHVwLmluaXQoJChcIi5oZWFkZXItY29udGVudFwiKSk7XHJcbiAgICBwb3B1cC5pbml0KCQoXCIucG9wdXAtY29uZlwiKSk7XHJcbiAgICBwb3B1cC5pbml0KCQoXCIucG9wdXAtb2ZlcnRcIikpO1xyXG5cclxuXHJcbiAgICAkKFwiLnN1Y2VzcyAuYnV0dG9uXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIuc3VjZXNzIC5wb3B1cFwiKS5hZGRDbGFzcyhcImhpZGRlblwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vc2hvd05ld3NcclxuXHJcbiAgICB2YXIgbmV3cyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdmFyIF9zaG93TmV3cyA9IGZ1bmN0aW9uIChjb250YWluZXIpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBidG4gPSAkKFwiLm5ld3NfX2xpbmtcIiwgY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIGJ0bi5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKFwiLm5ld3NfX3RleHQtaGlkZGVuXCIpLnNsaWRlVG9nZ2xlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJC5mbi50b2dnbGVUZXh0ID0gZnVuY3Rpb24odDEsIHQyKXtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50ZXh0KCkgPT0gdDEpIHRoaXMudGV4dCh0Mik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSAgICAgICAgICAgICAgICAgICB0aGlzLnRleHQodDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVUZXh0KCfQn9C+0LTRgNC+0LHQvdC10LUnLCAn0KHQstC10YDQvdGD0YLRjCcpO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpbml0OiBfc2hvd05ld3NcclxuICAgICAgICB9XHJcbiAgICB9KCk7XHJcblxyXG4gICAgbmV3cy5pbml0KCQoXCIubmV3c19faXRlbVwiKSlcclxuXHJcblxyXG4gICAgLy9NQVBcclxuXHJcbiAgICB2YXIgbWFwO1xyXG5cclxuICAgIERHLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG1hcCA9IERHLm1hcCgnbWFwJywge1xyXG4gICAgICAgICAgICBjZW50ZXI6IFs1NC45ODA0OTQsIDgyLjg5ODAxMF0sXHJcbiAgICAgICAgICAgIHpvb206IDE3LFxyXG4gICAgICAgICAgICBzY3JvbGxXaGVlbFpvb206IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIERHLm1hcmtlcihbNTQuOTgwNDk0LCA4Mi44OTgwMTBdKS5hZGRUbyhtYXApO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIC8vc2VuZCBmb3Jtc1xyXG5cclxuICAgICQoXCIuZm9ybVwiKS5zdWJtaXQoZnVuY3Rpb24gKGUpIHsgLy/Rg9GB0YLQsNC90LDQstC70LjQstCw0LXQvCDRgdC+0LHRi9GC0LjQtSDQvtGC0L/RgNCw0LLQutC4INC00LvRjyDRhNC+0YDQvNGLXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBmb3JtX2RhdGEgPSAkKHRoaXMpLnNlcmlhbGl6ZSgpOyAvL9GB0L7QsdC10YDQsNC10Lwg0LLRgdC1INC00LDQvdC90YvQtSDQuNC3INGE0L7RgNC80YtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIiwgLy/QnNC10YLQvtC0INC+0YLQv9GA0LDQstC60LhcclxuICAgICAgICAgICAgdXJsOiBcInNlbmQucGhwXCIsIC8v0L/Rg9GC0Ywg0LTQviBwaHAg0YTQsNC50LvQsCDQvtGC0L/RgNCw0LLQuNGC0LXQu9GPXHJcbiAgICAgICAgICAgIGRhdGE6IGZvcm1fZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIC8v0LrQvtC0INCyINGN0YLQvtC8INCx0LvQvtC60LUg0LLRi9C/0L7Qu9C90Y/QtdGC0YHRjyDQv9GA0Lgg0YPRgdC/0LXRiNC90L7QuSDQvtGC0L/RgNCw0LLQutC1INGB0L7QvtCx0YnQtdC90LjRj1xyXG4gICAgICAgICAgICAgICAgJChcIi5zdWNlc3MgLnBvcHVwXCIpLnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSkoKTsiXX0=
