// Основной канал
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

// Канал рекомендации
const recommended = () => {
  let swiper = new Swiper('.recommended-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,

    // Navigation arrows
    navigation: {
      nextEl: '.channel-recommended-button-next',
      prevEl: '.channel-recommended-button-prev',
    },
  })
}

// Канал еда и напитки
const food_drink = () => {
  let swiper = new Swiper('.channel-food-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 6,

    // Navigation arrows
    navigation: {
      nextEl: '.channel-food-button-next',
      prevEl: '.channel-food-button-prev',
    },
  })
}

// Подключаем все каналы
channel();
recommended();
food_drink();
