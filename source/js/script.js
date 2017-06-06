(function($){

  function smoothScroll() {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      window.requestAnimationFrame(smoothScroll);
      window.scrollTo(0, currentScroll - (currentScroll / 5));
    }
  }

  var header = $('.header')
  var banner = document.getElementById('article-banner') || false
  var top = $('.scroll-top')

  $('.menu').on('click', function() {
    $('.menu-mask').toggleClass('open')
  })

  top.on('click', function() {
    smoothScroll()
  })

  if (!header.data('ispost') || header.data('ishome')) {
    header.addClass('fixed-header')
  }

  document.addEventListener('scroll', function() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var headerH = header.height()
    if (banner) {
      if (scrollTop > headerH) {
        header.addClass('fixed-header')
      } else {
        header.removeClass('fixed-header')
      }
    }
    if (scrollTop > 100) {
      top.addClass('opacity')
    } else {
      top.removeClass('opacity')
    }
  });

})(jQuery);