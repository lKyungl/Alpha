$(document).ready(function () {
  $('.slider').slick({
    arrows:false,
    centerMode: true,
    centerPadding: '20vw',
    slidesToShow: 1,
    autoplay: true,
    // autoplaySpeed: 3000,
    speed: 1000,
    infinite: true,
    appendArrows: '.prev',
    appendArrows: '.next'
  });
});
$('.prev').click(function(){
  $(".slider").slick('slickPrev');
});
$('.next').click(function(){
  $(".slider").slick('slickNext');
});