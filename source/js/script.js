(function($){
  var header = $('.header')

  $('.menu').on('click', function() {
    $('.menu-mask').toggleClass('open')
  })

  if(!header.data('ispost') || header.data('ishome')){
    header.addClass('fixed-header');
  }

})(jQuery);