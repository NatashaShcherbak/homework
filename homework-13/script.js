// function Slider() {
//     const prevBtn = document.querySelector('.js--prev');
//     const nextBtn = document.querySelector('.js--next');
//     const slider = document.querySelectorAll('.js--slide');
//     let active = 0;
//     let timerForward;
//     let timerBack;
//
//     this.btnSlider = function () {
//         nextBtn.addEventListener('click', () => {
//             this.autoSlider();
//         });
//         prevBtn.addEventListener('click', () => {
//             this.autoSliderBack();
//         });
//     }
//
//     this.autoSlider = function () {
//         timerForward = setInterval(this.goForward, 5000);
//         clearInterval(timerBack);
//     }
//
//     this.autoSliderBack = function () {
//         timerBack = setInterval(this.goBack, 5000);
//         clearInterval(timerForward);
//     }
//
//     Slider.prototype.dotsSlider();
//
//     this.goForward = function () {
//         prevBtn.classList.remove('btn_disabled');
//         slider[active].classList.remove('active');
//         if (active + 1 === slider.length) {
//             nextBtn.disabled = true;
//             nextBtn.classList.add('btn_disabled');
//             clearInterval(timerForward);
//         } else {
//             active++;
//             Slider.prototype.activeDotsSlider(active);
//         }
//         slider[active].classList.add('active');
//         nextBtn.disabled = false;
//     }
//
//     this.goBack = function () {
//         nextBtn.classList.remove('btn_disabled');
//         slider[active].classList.remove('active');
//         if (active === 0) {
//             prevBtn.disabled = true;
//             prevBtn.classList.add('btn_disabled');
//             clearInterval(timerBack);
//         } else {
//             active--;
//             Slider.prototype.activeDotsSlider(active);
//         }
//         slider[active].classList.add('active');
//         prevBtn.disabled = false;
//     }
// }
//
// Slider.prototype.dotsSlider = function () {
//     const slider = document.querySelectorAll('.js--slide');
//     let dots = '';
//     for (let i = 1; i < slider.length; i++) {
//         if (i === 1) {
//             dots = '<li class="dots__item js--dots-item active"></li>';
//         }
//         dots += '<li class="dots__item js--dots-item"></li>';
//     }
//     document.querySelector('.js--dots').innerHTML = dots;
// }
//
// Slider.prototype.activeDotsSlider = function (n) {
//     const dotsItem = document.querySelectorAll('.js--dots-item');
//     dotsItem[n].classList.add('active');
//     for (let dot of dotsItem) {
//         dot.classList.remove('active');
//     }
//     dotsItem[n].classList.add('active');
// }
//
// let slider = new Slider();
// slider.autoSlider();
// slider.btnSlider();
