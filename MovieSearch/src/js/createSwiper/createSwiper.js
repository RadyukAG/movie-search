import Swiper from '../../swiper/js/swiper.min'

const mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    freeMode: true,
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
   breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    850: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    1100: {
        slidesPerView: 4,
        spaceBetween: 20,
    }
  }
});

export default mySwiper;