const CitiesSwiper = new Swiper('.Cities-Swiper', {
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

// Review card swiper
var ReviewSwiper = new Swiper(".Review-Swiper", {
  effect: "flip",
  grabCursor: true,
  navigation: {
    nextEl: ".next-slide-btn",
    prevEl: ".prev-slide-btn",
  },
  autoplay: {
    delay: 2000, // Adjust the delay (in milliseconds) as needed
    disableOnInteraction: false, // Keep autoplay active after user interaction
  },
  // loop: true, // Enable looping
});

// Grid swiper
var GridSwiper = new Swiper(".Grid-Swiper", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      origin: "left center",
      translate: ["-5%", 0, -200],
      rotate: [0, 100, 0],
    },
    next: {
      origin: "right center",
      translate: ["5%", 0, -200],
      rotate: [0, -100, 0],
    },
  },
  navigation: {
    nextEl: ".next-slide-btn2",
    prevEl: ".prev-slide-btn2",
  },
  autoplay: {
    delay: 2000, // Adjust the delay (in milliseconds) as needed
    disableOnInteraction: false, // Keep autoplay active after user interaction
  },
});
// Get the video and pause button elements
const video = document.getElementById('custom-video');
const pauseIcon = document.getElementById('pause-icon');

// Add event listener to play the video when clicked
video.addEventListener('click', () => {
  if (video.paused) {
    video.play(); // Play the video if it's paused
  } else {
    video.pause(); // Pause the video if it's playing
  }
});

// Show the pause icon when the video is paused
video.addEventListener('pause', () => {
  pauseIcon.style.display = 'flex'; // Show the pause icon when paused
});

// Hide the pause icon when the video is playing
video.addEventListener('play', () => {
  pauseIcon.style.display = 'none'; // Hide the pause icon when playing
});
