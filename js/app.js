$(function() {
  function goTopActive() {
    const scrollTop = $(window).scrollTop();
    const innerHeight = $(window).innerHeight();

    if (scrollTop > innerHeight) {
      $(".goTop").addClass("active");
    } else {
      $(".goTop").removeClass("active");
    }
  }

  function goTop() {
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
  }

  function goSection() {
    const scrollTarget = $(this)[0].attributes[1].nodeValue;
    const offsetTop = $(scrollTarget).offset().top;

    $("html, body").animate({ scrollTop: offsetTop }, 500);
    return false;
  }

  function fadeIn() {
    $(".fadein").each(function() {
      const scroll = $(window).scrollTop();
      const offsetTop = $(this).offset().top;
      const windowHeight = $(window).innerHeight();

      // if($(window).innerWidth() > 500){
        if(scroll > (offsetTop - windowHeight + 100)){
          $(this).addClass('active');
        }
      // }
    });
  }

  $(window).on("scroll", goTopActive);
  $(window).on("scroll", fadeIn);
  $(".goTop").on("click", goTop);
  $(".goSection").on("click", goSection);
});
