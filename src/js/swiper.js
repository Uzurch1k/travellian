import Swiper from 'swiper/bundle';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

window.addEventListener('load', () => {
  new Swiper('.swiper', {
    modules: [Navigation, Pagination, Autoplay],

    direction: 'vertical',
    loop: true,
    speed: 3000,
    effect: 'fade',
    autoplay: {
      delay: 4000,
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
