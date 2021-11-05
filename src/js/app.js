$(document).on("scroll", function () {
  var scrollTop = $(window).scrollTop();
  if (scrollTop >= 19) {
    $("header").addClass("navbar-fix");
  } else {
    $("header").removeClass("navbar-fix");
  }
});
