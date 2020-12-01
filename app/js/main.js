$(function(){

  $('.filter-price__input').ionRangeSlider();
  
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
  var mixer2 = mixitup('.category__items',{
    selectors: {
      control: '.category__filter-btn'
    }
  });

  
});