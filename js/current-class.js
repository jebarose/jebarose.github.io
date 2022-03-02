

$(function() {
    $(window).scroll(function() {
      var y = $(this).scrollTop();
      $('#mainNav a').each(function(event) {
        if (y >= $($(this).attr('href')).offset().top - 90) {
          $('#mainNav a').not(this).removeClass('current');
          $(this).addClass('current');
        }
      });
    });
  });