function Car() {
    this.name = prompt('Введите марку машины');
    this.year = prompt('Введите год выпуска машины');
    this.color = prompt('Введите цвет машины');
    this.checkName = this.name === '' || this.name === null;
    this.checkYear = this.year === '' || this.year === null || !isFinite(+this.year) || this.year > 2022;
    this.checkColor = this.color === '' || this.color === null;
    this.info = function () {
        if (this.checkName) this.name = 'ERROR';
        if (this.checkYear) this.year = 'ERROR';
        if (this.checkColor) this.color = 'ERROR';
    }
    this.show = function () {
        console.log(this);
    }
    this.getUser = function () {
        this.owner = new User();
        return this.owner.infoUser();
    }
}
function onClickCar() {
    let car = new Car;
    car.info();
    car.show();
    car.getUser();
}

