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
  var path = window.location.pathname
  var isOpen = false

  $('.menu').on('click', function() {
    if (!header.hasClass('fixed-header') || isOpen) {
      header.toggleClass('fixed-header')
      isOpen = !isOpen
    }
    $('.menu-mask').toggleClass('open')
  })

  top.on('click', function() {
    smoothScroll()
  })
  
  if (['/', '/archives/'].indexOf(path) != -1) {
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