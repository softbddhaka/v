$(function(){
// slider 
      $('.card_slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll:1,
        arrows:false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1700,
        speed: 1200,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '35px',
              slidesToShow:1
            }
          }
        ]
      });

});