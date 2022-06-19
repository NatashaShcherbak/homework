function workSlider() {
    const prevBtn = document.querySelector('.js--prev');
    const nextBtn = document.querySelector('.js--next');
    const slider = document.querySelectorAll('.slide');
    let active = 0;
    let timerForward;
    let timerBack;

    nextBtn.addEventListener('click', autoSlider);
    prevBtn.addEventListener('click', autoSliderBack);

    function autoSlider() {
        timerForward = setInterval(goForward, 5000);
        clearInterval(timerBack);
    }
    autoSlider();

    function autoSliderBack() {
        timerBack = setInterval(goBack, 5000);
        clearInterval(timerForward);
    }

    function goForward() {
        prevBtn.classList.remove('btn');
        slider[active].classList.remove('active');
        if (active + 1 === slider.length) {
            nextBtn.disabled = true;
            nextBtn.classList.add('btn');
            clearInterval(timerForward);
        } else {
            active++;
        }
        slider[active].classList.add('active');
        nextBtn.disabled = false;
    }

    function goBack() {
        nextBtn.classList.remove('btn');
        slider[active].classList.remove('active');
        if (active === 0) {
            prevBtn.disabled = true;
            prevBtn.classList.add('btn');
            clearInterval(timerBack);
        } else {
            active--;
        }
        slider[active].classList.add('active');
        prevBtn.disabled = false;
    }
}
workSlider();