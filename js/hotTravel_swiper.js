import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css'; // 導入 Swiper 的 CSS

let swiperInstance;

function initSwiper2() {
  if (!swiperInstance) {
    var swiper = new Swiper('.hotTravel_swiper', {
      //   modules: [Navigation, Pagination],
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 24,
      width: 324,
      loop: true,
      pagination: {
        el: '.hotTravel_swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        prevEl: '.hotTravel_swiper-button-prev',
        nextEl: '.hotTravel_swiper-button-next',
      },
      //   breakpoints: {
      //     // 當視窗寬度 >= 768px
      //     768: {
      //       slidesPerView: 2,
      //       spaceBetween: 24,
      //       width: null, // 移除寬度限制
      //     },
      //   },
    });
    console.log('hotTravel_swiper initialized');
  }
  return swiperInstance;
}

function destroySwiper2() {
  if (swiperInstance) {
    swiperInstance.destroy();
    swiperInstance = null;
    console.log('Swiper destroyed');
  }
}

// 初始化並導出
const swiper2 = initSwiper2();

export { swiper2, initSwiper2, destroySwiper2 };
