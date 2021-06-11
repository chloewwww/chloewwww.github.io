$(function() {
  $('.bfg-top .nav-trigger').on('click', function() {
    $('.bfg-top .menus').stop().fadeIn('fast')
    $('body').addClass('fixed')
  })
  $('.bfg-top .btn-close').on('click', function() {
    $('.bfg-top .menus').stop().fadeOut('fast')
    $('body').removeClass('fixed')
  })

  $(window).resize(function() {
    $('body').removeClass('fixed')
    $('.bfg-top .menus').attr('style', '')
  })
})
