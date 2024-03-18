// gallery js
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

// sweet alert js
document.addEventListener("DOMContentLoaded", function () {
    const moreDetailsButton = document.getElementById("details-btn");

    moreDetailsButton.addEventListener("click", function () {
        console.log("Button clicked!");
        swal("Currently unavailble", "Try again later!");

    });
});

// text animation js
const textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.ml6 .letter',
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 50 * i
    }).add({
        targets: '.ml6',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });

// masonry js
document.addEventListener('DOMContentLoaded', function () {
    const grid = document.querySelector('.grid');
    const masonry = new Masonry(grid, {
        itemSelector: '.grid-item',
        columnWidth: 160,
    });
});

// phone js
document.addEventListener("DOMContentLoaded", function () {
    const cleave = new Cleave('.input-element', {
        phone: true,
        phoneRegionCode: 'CA'
    });

    document.getElementById('country-code').addEventListener('change', function () {
        const countryCode = this.value;
        cleave.setPhoneRegionCode(countryCode);
    });
});
