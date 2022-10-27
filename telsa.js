$(window).scroll(function() {
    var homeTop = $(window).scrollTop();
  
    $(".splashback").each(function() {
      var height = $(this).height();
      var offset = $(this).offset().top;
      var opacity = (height - homeTop + offset) / height;
  
      $(this).css("opacity", opacity);
    });
  });