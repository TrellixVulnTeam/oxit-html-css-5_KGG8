$(document).on("scroll", function () {
  let scrollTop = $(window).scrollTop();
  let h = $("header").height();
  if (scrollTop >= 19) {
    $("header").addClass("navbar-fix");
    $(".home .container:nth-child(2)").css({ "padding-top": h + 40 + "px" });
  } else {
    $("header").removeClass("navbar-fix");
    $(".home .container:nth-child(2)").css({ "padding-top": "40px" });
  }
  $("body").attr("data-bs-offset", h + 15);
});
