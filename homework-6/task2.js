function getCar() {
    function Car() {
        this.name = prompt('Введите марку машины');
        this.year = prompt('Введите год выпуска машины');
        this.color = prompt('Введите цвет машины');
        this.show = function () {
            if (this.name === '' || this.name === null) {
                alert('error - имя');
            } else if (this.year === '' || this.year === null || !isFinite(+this.year)) {
                alert('error - год');
            } else if (this.color === '' || this.color === null) {
                alert('error - цвет');
            } else {
                alert(this.name + ' ' + this.year + ' ' + this.color + ' ' + this.owner.firstname + ' ' + this.owner.lastname);
            }
        }
        this.info = function () {
            console.log(this);
        }
    }
    let car = new Car;
    car.owner = {}
    car.owner.lastname = 'Александр';
    car.owner.firstname = 'Иванов';
    car.show();
    car.info();
}