$(function(){

    $('.top__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        fade: true,
        responsive: [
            {
                breakpoint: 1175,
                settings: {
                    dots: false
                }

            }
        ]
    });
    
    $('.reviews__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 585,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
    });

    $(".autopark__name .autopark__wrapper .autopark__tab").click(function() {
        $(".autopark__name .autopark__wrapper .autopark__tab").removeClass("active").eq($(this).index()).addClass("active");
         $(".autopark__name .autopark__item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $('.contacts__map-contant').on('click', function(){
        $('.contacts__map-inner').toggleClass('open');
    });






});