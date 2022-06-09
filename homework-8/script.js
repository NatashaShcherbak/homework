function formValidate() {
    const form = document.querySelector('.js--form');
    const number = document.querySelector('.js--form-number');
    const name = document.querySelector('.js--form-name');
    const cvv = document.querySelector('.js--form-cvv');
    const month = document.querySelector('.js--form-month');
    const year = document.querySelector('.js--form-year');

    const btn = document.querySelector('.js--btn');
    btn.setAttribute('disabled', 'disabled');

    const inputs = document.querySelectorAll('.js--valid');
    inputs.forEach((el) => {
        el.setAttribute('is-valid', '0');
    });

    let check;
    let userValue;

    function getCheck(item) {
        if (check) {
            item.classList.add('error');
            item.setAttribute('is-valid', '0');
        } else {
            item.classList.remove('error');
            item.setAttribute('is-valid', '1');
        }
    }
    function showForm(item, selector) {
        if (!item.classList.contains('error')) {
            document.querySelector(selector).innerHTML = userValue;
        }
    }
    number.addEventListener('input', function () {
        check = !/\d{16}/.test(number.value) || number.value.length > 16;
        userValue = `${number.value.substring(0, 4)} ${number.value.substring(4, 8)}
                     ${number.value.substring(8, 12)} ${number.value.substring(12, 16)}`;
        getCheck(number);
        showForm(number, '.js--img-number');
    })
    name.addEventListener('input', function () {
        check = !/^[a-zA-Z\s]+$/.test(name.value) || name.value.length < 3 || name.value.length > 10;
        userValue = name.value;
        getCheck(name);
        showForm(name, '.js--img-name');
    })
    cvv.addEventListener('input', function () {
        check = !/\d{3}/.test(cvv.value);
        getCheck(cvv);
    })
    month.addEventListener('input', function () {
        check = month.value === month.options[0].value;
        userValue = `${month.value}/`;
        getCheck(month);
        showForm(month, '.js--month');
    })
    year.addEventListener('input', function () {
        check = year.value === year.options[0].value;
        userValue = year.value;
        getCheck(year);
        showForm(year, '.js--year');
    })

    form.addEventListener('input', checkValid);

    function checkValid() {
        const isAllValid = [];
        inputs.forEach((el) => {
            isAllValid.push(el.getAttribute('is-valid'));
        })
        const isValid = (element) => {
            return element === '0'
        };
        if (!isAllValid.some(isValid)) {
            btn.removeAttribute('disabled');
        } else {
            btn.setAttribute('disabled', 'disabled');
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let userInfo = Array.from(inputs).map(item => item.name + ': ' + item.value);
        console.log(userInfo);
        form.reset();
    });
}
formValidate();





