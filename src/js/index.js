var swiper = new Swiper(".swiper-container", {
  slidesPerView: 5,
  // spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  // loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
