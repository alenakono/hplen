const swiper = new Swiper('.examples-swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.examples-swiper__next',
      prevEl: '.examples-swiper__prev',
    },
    scrollbar: {
      el: '.examples__pagination',
    },
});

const swiperTop = new Swiper('.top-swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.top-swiper__next',
    prevEl: '.top-swiper__prev',
  },
});

$(document).ready(function () {
  $(".layers__icon").on("click", function (event) {
    let layersItem = $(this.parentElement);
    layersItem.siblings().removeClass("_active");
    $(this.parentElement).toggleClass("_active");
  });
});
