const thumbsSwiper = new Swiper('.slide-thumbnail', {
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
    slideToClickedSlide: true,
    breakpoints: {
        0: {
            slidesPerView: 3
        },
        480: {
            slidesPerView: 4
        },
        768: {
            slidesPerView: 5
        }
    },
    on: {
        click: function (swiper) {
            const clickedIndex = swiper.clickedIndex;
            const slidesPerView = swiper.params.slidesPerView;

            if (clickedIndex === undefined) return;

            const lastVisibleIndex = swiper.activeIndex + slidesPerView - 1;

            // Se clicou no último visível, avança
            if (clickedIndex === lastVisibleIndex) {
                swiper.slideNext();
            }

            // Se clicou no primeiro visível, volta
            if (clickedIndex === swiper.activeIndex) {
                swiper.slidePrev();
            }
        }
    }
});

const mainSwiper = new Swiper('.slide-imagens', {
    spaceBetween: 10,
    loop: true,
    thumbs: {
        swiper: thumbsSwiper
    }
});