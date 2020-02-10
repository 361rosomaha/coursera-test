$(document).ready(function(){

  // Ask a question form
  $('.close').click( function(){
    $(".form").hide();
  });

  $('.button-form').click( function(){
    $(".form").show();
  });

  $(window).click( function(event){
    if (event.target == document.querySelector(".form")) {
      $(".form").hide();
    }
  });

  //Filter reset
    $("#reset").on("click", function () {
      $($(this).data('child')+ " input:checkbox:checked").click();
    });

   // Search in menu

  $('.i-search').click( function(){
    $(".search").show();
    $(".modal.search input.is-large").focus();
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

  //filter
  $('.burgerFilter').click( function(){
    $(this).toggleClass('is-active');
    $("#"+$(this).data('target')).toggleClass('is-active');
});

  $('.carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });

  $('.slTabs').tabslet();
  
  $('.gallery-tabs').tabslet();
  $('.gallery-tabs').on("_after", function() {
    $('.single-item').slick('setPosition', 0);
  });

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
    slidesToShow: 5,
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
    ]
  });

  $('.hint').hover(function(){
    $(this).html( $("<span>"+$(this).data('hint')+"</span>"));
  },
  function (){
      $(this).html($(""));
  });

  $('.hint1').hover(function(){
    $(this).html( $("<span>"+$(this).data('hint1')+"</span>"));
  },
  function (){
      $(this).html($(""));
  });


  initMultiCheckboxes();
});

function initMultiCheckboxes() {
  $('#filter-collapse-button select').each(function() {
    $(this).multiSelect({ noneText: $(this).data('hint')});
  })
  
  $('#product-filter select').each(function() {
    $(this).multiSelect({ noneText: $(this).data('hint1')});
  })
}
