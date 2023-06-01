const slider = document.querySelector('.brend-slider');
const breakpointSwiper = window.matchMedia('(max-width: 767px)');
let mySwiper;

function mobileSlider() {
	if (breakpointSwiper.matches ) {
		mySwiper = new Swiper(slider, {
			pagination: {
                el: '.brend-slider__pagination',
                clickable: true,
                },
                mousewheel: {
                    sensitivity: 1,
                    eventsTarget: '.brend-slider',
                  },
                 slidesPerView: 1.3,
                  spaceBetween: 16,
		});
        slider.dataset.mobile = 'true';
	}

	else {
		slider.dataset.mobile = 'false';
		if (slider.classList.contains('swiper-initialized')) {
			mySwiper.destroy();
		}
	}
}
mobileSlider();
breakpointSwiper.addEventListener('change', mobileSlider);

let hiddenConteiner = document.querySelector('.brend__hidden-conteiner');
let showMoreButton = document.querySelector('.brands__show-more-btn');
showMoreButton.addEventListener('click', function(evt){
    if (showMoreButton.textContent === 'Скрыть') {
        showMoreButton.textContent = 'Показать все';
    } else {
        showMoreButton.textContent = 'Скрыть';
    }
    showMoreButton.classList.toggle('brands__show-more-buttom');
    evt.preventDefault();
    hiddenConteiner.classList.toggle('brend__hidden-conteiner');
});
