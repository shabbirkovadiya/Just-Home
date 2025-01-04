const swiper = new Swiper('.Cities-Swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      // When the viewport is >= 320px (Mobile)
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
         // When the viewport is >= 768px (Tablet)
         576: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      // When the viewport is >= 768px (Tablet)
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // When the viewport is >= 1024px (Desktop)
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      // When the viewport is >= 1400px (Large Screens)
      1400: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });