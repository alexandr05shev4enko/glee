$(function(){
  
  $('.slider__inner').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    fade: true
  });

  var mixer = mixitup('.products__items',{
    selectors: {
      control: '.products__filter-btn'
    }
  });

});