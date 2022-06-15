const prevBtn = document.querySelector('.js--prev');
const nextBtn = document.querySelector('.js--next');
const slider = document.querySelectorAll('.slide');
let active = 0;

nextBtn.addEventListener('click', function () {
    prevBtn.classList.remove('btn');
    slider[active].classList.remove('active');
    if (active + 1 === slider.length) {
        nextBtn.disabled = true;
        nextBtn.classList.add('btn');
    } else {
        active++;
    }
    slider[active].classList.add('active');
    nextBtn.disabled = false;
})
prevBtn.addEventListener('click', function () {
    nextBtn.classList.remove('btn');
    slider[active].classList.remove('active');
    if (active === 0) {
        prevBtn.disabled = true;
        prevBtn.classList.add('btn');
    } else {
        active--;
    }
    slider[active].classList.add('active');
    prevBtn.disabled = false;
})