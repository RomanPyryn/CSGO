var swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
	},
	breakpoints: {
    320: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  cssMode: true,
  mousewheel: true,
  keyboard: true,
  loop: true,
});
