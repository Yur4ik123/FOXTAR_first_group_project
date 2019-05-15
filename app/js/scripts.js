
$(function () {
  $("#tabs-script").tabs();
  $('.multiple-items').slick({
    infinite: true,
    dots: true,
    autoplay: false,
    autoplaySpeed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
          breakpoint: 1700,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 825,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          
          }
        }
    ]
  });
 
});
