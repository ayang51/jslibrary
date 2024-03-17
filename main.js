
// gallery js
const swiper = new Swiper('.swiper', {
    // flow of images
    direction: 'horizontal',
    loop: true,
    
    // gallery arrowsid
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
});
