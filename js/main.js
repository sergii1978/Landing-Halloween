$(document).ready(function() {

    /*--slick slider--*/ 
    $('.slick-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: false,
        dotsClass: 'dots-style',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });

    /*--header slider--*/ 
    $('.header-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: false,
        adaptiveHeight: true,
        fade: true,
        cssEase: 'linear',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });






    


         /* Выпадающее меню */
        $(window).scroll(function () {
            if ($(this).scrollTop() < 3800)
               $('.social-hide').fadeIn();
            else 
               $('.social-hide').fadeOut();
         });

        /* Кнопка наверх */
        $(window).scroll(function () {
           if ($(this).scrollTop() > 800)
              $('#toTop').fadeIn();
           else
              $('#toTop').fadeOut();
        });
        $('#toTop').click(function () {
           $('body,html').animate({
              scrollTop: 0
           }, 800);
        });
     });

    /*- Модальное окно-*/
    $('.modal').click( function(event){
        event.preventDefault();
        $('#overlay').fadeIn(1000, // анимируем показ обложки
            function(){ // далее показываем мод. окно
                $('#modal_form') 
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 500);
        });
    });
 
    // закрытие модального окна
    $('#modal_close, #overlay').click( function(){
        $('#modal_form')
            .animate({opacity: 0, top: '15%'}, 200,  // уменьшаем прозрачность
                function(){ // пoсле aнимaции
                    $(this).css('display', 'none'); // скрываем окно
                    $('#overlay').fadeOut(400); // скрывaем пoдлoжку
                }
            );
    }); 
     

    /*hoverwords*/  
     $(window).load(function(){
        $('#word').hoverwords({ delay:50 });	
    });

    /*--animate JS--*/
     $(function () {
        $(window).scroll(function() {
            $('#about .section-header').each(function(){
                var imagePos = $(this).offset().top;
    
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+500) {
                    $(this).addClass("fadeInLeft");
                }
            });
        });
        $(window).scroll(function() {
            $('#about .about-icons__cont').each(function(){
                var imagePos = $(this).offset().top;
    
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+600) {
                    $(this).addClass("fadeInUp");
                }
            });
        });
      })
