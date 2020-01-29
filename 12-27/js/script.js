$(document).ready(function(){

  // Ask a question form
  $('.close').click( function(){
    $(".modal").hide();
  });

  $('.button').click( function(){
    $(".modal").show();
  });

  $(window).click( function(event){
    if (event.target == document.querySelector(".modal") ) {
      $(".modal").hide();
    }
  });

   // Search in menu
   $('.close').click( function(){
    $(".modal").hide();
  });

  $('.i-search').click( function(){
    $(".modal.search").show();
  });

  $(window).click( function(event){
    if (event.target == document.querySelector(".search") ) {
      $(".search").hide();
    }
  });

  //Main nav menu
  $('.burger').click( function(){
      $(this).toggleClass('is-active');
      $("#"+$(this).data('target')).toggleClass('is-active');
  });

  $('.carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });

  $('.slTabs').tabslet();

  $('.single-item').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true
  });

  $('.responsive-carousel').slick({
    dots: true,
    infinite: true,
    speed: 0,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  }); 

});

