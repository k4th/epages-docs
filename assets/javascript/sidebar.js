$(document).ready(function() {
  $('li.sitemap-headline').click(function() {
    if ($(window).width() <= 992){
      if ($(this).next().hasClass('sitemap-content--open')) {
        $(this).next().slideUp().removeClass('sitemap-content--open');
      } else {
        $('.sitemap-content').removeClass('sitemap-content--open');
        $(this).next().slideDown().addClass('sitemap-content--open');
        $('.sitemap-headline svg').removeClass('fa-caret-up').addClass('fa-caret-down');
        $('svg', this).removeClass('fa-caret-down').addClass('fa-caret-up');
      }
    }
  });
  $('li.sitemap-entry, li.sitemap-entry-expand').click(function() {
    $('li.sitemap-entry').removeClass('active');
    $('li.sitemap-entry-expand.active').removeClass('active');
    $(this).addClass('active')
  });
});

function changeSiteMap(element) {
  nextElement = $(element).next();
  if($('svg', element).first().hasClass('fa-caret-down')) {
    if ($('.fa-caret-up').length > 0) {
      if ($(element).siblings('.sitemap-content-expand--open').length > 0) {
        prev = $(element).siblings('.sitemap-content-expand--open').first().prev();
        svg = $('svg', prev);
      } else {
        if (!$(element).parent().hasClass('sitemap-content-expand--open')) {
          svg = $('.fa-caret-up');
        }
      }
      if (svg) {
        svg.removeClass('fa-caret-up').addClass('fa-caret-down');
        svg.parent().next().slideUp().removeClass('sitemap-content-expand--open').addClass('sitemap-content-expand--close');
      }
    }
    $('svg', element).first().removeClass('fa-caret-down').addClass('fa-caret-up');
    $(nextElement).slideDown().removeClass('sitemap-content-expand--close').addClass('sitemap-content-expand--open');
  } else {
    $('svg', element).first().removeClass('fa-caret-up').addClass('fa-caret-down');
    $(nextElement).slideUp().removeClass('sitemap-content-expand--open').addClass('sitemap-content-expand--close');
  }
}
