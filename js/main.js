const channel = () => {
  let swiper = new Swiper('.channel-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 6,

    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next',
      prevEl: '.channel-button-prev',
    },
  })
}

const recommended = () => {
  let swiper = new Swiper('.recommended-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,

    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next',
      prevEl: '.channel-button-prev',
    },
  })
}

const food_drink = () => {
  let swiper = new Swiper('.food_drink-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 6,

    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next',
      prevEl: '.channel-button-prev',
    },
  })
}

channel();
recommended();
food_drink();
