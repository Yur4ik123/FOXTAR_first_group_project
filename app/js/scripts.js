
$(function () {
  $("#tabs-script").tabs();
  $('.multiple-items').slick({
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
          breakpoint: 1640,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
           
          }
        }
    ]
  });
  $(".js-range-slider").ionRangeSlider({
    skin: "round",
    type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$"
});
});
