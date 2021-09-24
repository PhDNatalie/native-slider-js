import Carousel from './carousel.js';
import SwipeCarousel from './swipe-carousel.js';

const carousel = new SwipeCarousel({
    containerID: '#myCarousel',
    slideID: '.item',
    interval: 1500,
    // isPlaying: false
  });

carousel.init();