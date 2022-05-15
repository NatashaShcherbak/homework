function getNumber() {
    let value = prompt('Введите число, большее 100');
    for (let i = 1; i < 10; i++) {
        if (value < 100) {
            value = prompt('Введите ещё раз число, большее 100');
        } else if (value > 100 || isNaN(+value) === true) {
            break;
        }
    }
    console.log(`${value}`);
}