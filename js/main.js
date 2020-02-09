$(document).ready(function () {

  $('.skill-carousel').slick({
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });

  $('.project-carousel').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1
  });

  $('.light-box').fancybox();

  $(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
      $('nav').addClass('shrink');
    } else {
      $('nav').removeClass('shrink');
    }
  });

  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 2000,
    offset: 200
  });

  $('.home').on('click', function () {
    $('.home').addClass('on-click')
    $('.nav-item').removeClass('on-click')
    $('.home').addClass('on-click')
  })

  $('.about').on('click', function () {
    $('.about').addClass('on-click')
    $('.nav-item').removeClass('on-click')
    $('.about').addClass('on-click')
  })

  $('.skill').on('click', function () {
    $('.skill').addClass('on-click')
    $('.nav-item').removeClass('on-click')
    $('.skill').addClass('on-click')
  })

  $('.work').on('click', function () {
    $('.work').addClass('on-click')
    $('.nav-item').removeClass('on-click')
    $('.work').addClass('on-click')
  })

  $('.contact').on('click', function () {
    $('.contact').addClass('on-click')
    $('.nav-item').removeClass('on-click')
    $('.contact').addClass('on-click')
  })
})