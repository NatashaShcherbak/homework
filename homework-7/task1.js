const button = document.querySelector('.js--bg-color');
const text = document.querySelector('.js--text');
button.addEventListener('click', () => {
    text.classList.toggle('text_orange');
})