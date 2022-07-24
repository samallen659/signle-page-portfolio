const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  loop: true,
  centeredSlides: true,
  grabCursor: true,
  initialSlide: 2,
  spaceBetween: 15,
  //   breakpoints: {
  //     768: {
  //       spaceBetween: 30,
  //       slidesPerView: 2,
  //     },
  //     1280: {
  //       slidesPerView: 3,
  //     },
  //   },
});

const prevSlideBtn = document.querySelector("#prev");
const nextSlideBtn = document.querySelector("#next");

prevSlideBtn.addEventListener("click", () => {
  swiper.slidePrev();
});
nextSlideBtn.addEventListener("click", () => {
  swiper.slideNext();
});
