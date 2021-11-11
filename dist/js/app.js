let scrollspy = new bootstrap.ScrollSpy(document.body, {
  target: "#nav",
  offset: $("header").height() + 1
});
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
});
$(function () {
  let headerNav = $("#navbarNav");
  headerNav.find('.nav-link[href^="#"]').on("click", function (e) {
    headerNav.collapse("hide");
  });
  let reviews = new Swiper(".testimonials .swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".testimonials .swiper-pagination",
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
  let plans = new Swiper(".price .swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".price .swiper-pagination",
      clickable: true
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 25
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  });
});