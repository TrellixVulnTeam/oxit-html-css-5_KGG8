$(document).on("scroll", function () {
  let scrollTop = $(window).scrollTop();
  let h = $("header").height();

  if (scrollTop >= 19) {
    $("header").addClass("navbar-fix");
    $(".home .container:nth-child(2)").css({
      "padding-top": h + 40 + "px"
    });
  } else {
    $("header").removeClass("navbar-fix");
    $(".home .container:nth-child(2)").css({
      "padding-top": "40px"
    });
  }

  $("body").attr("data-bs-offset", h);
});
var swiper = new Swiper(".reviews", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  breakpoints: {
    768: {
      slidesPerView: 2
    }
  }
});
var swiper = new Swiper(".plans", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  } // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
  // breakpoints: {
  //   768: {
  //     slidesPerView: 2,
  //   },
  // },

});