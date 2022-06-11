const userPassword = document.querySelector('.js--input');
const list = document.getElementsByTagName('li');

function checkPassword(regexp, item) {
    if (regexp.test(userPassword.value)) {
        item.style.color = '#319cd3';
    } else {
        item.style.color = '#0526a1';
    }
}
userPassword.addEventListener('input', () => {
    checkPassword(/[A-ZА-Я]/, list[0]);
    checkPassword(/\d/, list[1]);
    checkPassword(/[^\w\s]/, list[2]);
    checkPassword(/.{8,}/, list[3]);
})