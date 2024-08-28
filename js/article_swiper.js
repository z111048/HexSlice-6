import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css'; // 導入 Swiper 的 CSS

let swiperInstance;

function initSwiper() {
  if (!swiperInstance) {
    var swiper = new Swiper('.article_swiper', {
      modules: [Navigation, Pagination],
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 24,
      width: 324,
      loop: true,
      pagination: {
        el: '.article_swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        prevEl: '.article_swiper-button-prev',
        nextEl: '.article_swiper-button-next',
      },
      breakpoints: {
        // 當視窗寬度 >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
          width: null, // 移除寬度限制
        },
      },
    });
    console.log('article_swiper initialized');
  }
  return swiperInstance;
}

function destroySwiper() {
  if (swiperInstance) {
    swiperInstance.destroy();
    swiperInstance = null;
    console.log('Swiper destroyed');
  }
}

// 初始化並導出
const swiper = initSwiper();

export { swiper, initSwiper, destroySwiper };
