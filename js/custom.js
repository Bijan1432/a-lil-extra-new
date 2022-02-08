$('#owl-carousel1').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    center:true,
    responsive:{
        0:{
            items:1,
          
        },
        600:{
            items:1,
            
        },
        1000:{
            items:1,
           
            
        }
    }
})
$('.owl-carousel2').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    center:true,
    responsive:{
        0:{
            items:1,
          
        },
        600:{
            items:1,
            
        },
        1000:{
            items:1,
           
            
        }
    }
})


// (function() {
//     var $slides = document.querySelectorAll('.slide');
//     var $controls = document.querySelectorAll('.slider__control');
//     var numOfSlides = $slides.length;
//     var slidingAT = 1300; // sync this with scss variable
//     var slidingBlocked = false;
  
//     [].slice.call($slides).forEach(function($el, index) {
//       var i = index + 1;
//       $el.classList.add('slide-' + i);
//       $el.dataset.slide = i;
//     });
  
//     [].slice.call($controls).forEach(function($el) {
//       $el.addEventListener('click', controlClickHandler);
//     });
  
//     function controlClickHandler() {
//       if (slidingBlocked) return;
//       slidingBlocked = true;
  
//       var $control = this;
//       var isRight = $control.classList.contains('m--right');
//       var $curActive = document.querySelector('.slide.s--active');
//       var index = +$curActive.dataset.slide;
//       (isRight) ? index++ : index--;
//       if (index < 1) index = numOfSlides;
//       if (index > numOfSlides) index = 1;
//       var $newActive = document.querySelector('.slide-' + index);
  
//       $control.classList.add('a--rotation');
//       $curActive.classList.remove('s--active', 's--active-prev');
//       document.querySelector('.slide.s--prev').classList.remove('s--prev');
      
//       $newActive.classList.add('s--active');
//       if (!isRight) $newActive.classList.add('s--active-prev');
      
  
//       var prevIndex = index - 1;
//       if (prevIndex < 1) prevIndex = numOfSlides;
  
//       document.querySelector('.slide-' + prevIndex).classList.add('s--prev');
  
//       setTimeout(function() {
//         $control.classList.remove('a--rotation');
//         slidingBlocked = false;
//       }, slidingAT*0.75);
//     };
//   }());


// The function toggles more (hidden) text when the user clicks on "Read more". The IF ELSE statement ensures that the text 'read more' and 'read less' changes interchangeably when clicked on.
$('.moreless-button').click(function() {
    $('.moretext').slideToggle();
    if ($('.moreless-button').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });