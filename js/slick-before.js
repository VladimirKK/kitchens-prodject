$(document).ready(function() {
    $('.before__slider').slick({
        arrows: true,
        slidesToScroll: 1,
        autoplay: true,
        centerPadding: '60px',
        slidesToShow: 3,
        prevArrow: $(".arrow-left"),
        nextArrow: $(".arrow-right"),
        responsive: [
            {
        breakpoint: 1078,
        settings: {
            slidesToShow: 2
        }
    },
    {
        breakpoint: 650,
        settings: {
            slidesToShow: 1
        }
    }
  ]
    });
});
   
 