const link = document.querySelector('.js--link');
const btn = document.querySelector('.js--btn');
let userLink;
link.addEventListener('click', () => {
    userLink = prompt('Введите Вашу ссылку');
})
btn.addEventListener('click', () => {
    location.assign(userLink);
})
