$(function () {
  $(".button__toggle").click(function () {
    $(".button__inner").show;
  });

  $('.section-recommend_autoplay').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: true,
  });

  $('.section-store__mv_fade').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear'
  });
});
