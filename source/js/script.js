(function($){

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

  $('#tag-cloud a').on('click', function() {
    var list = $('.tag-list')
    var name = $(this).data('name')
    var maoH = list.find('#' + name).offset().top

    $('html,body').animate({ scrollTop: maoH - header.height() }, 500);
  })

  $('.reward-btn').on('click', function() {
    $('.money-code').fadeToggle()
  })

  top.on('click', function() {
    $('html,body').animate({ scrollTop: 0 }, 600);
  })

  if (['/tags/', '/archives/'].indexOf(path) != -1 || header.data('ispost')) {
    header.removeClass('fixed-header')
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