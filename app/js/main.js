$(function(){

  $('.star').rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true
  });

  $('.star1').rateYo({
    starWidth: "17px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true
  });

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    onStart: function (data){
      $(".filter-price__from").text(data.from);
      $(".filter-price__to").text(data.to);
    },
    onChange: function (data) {
      $(".filter-price__from").text(data.from);
      $(".filter-price__to").text(data.to);
    }
  }); 
  
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