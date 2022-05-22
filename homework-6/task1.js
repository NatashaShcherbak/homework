function getUser() {
    function User() {
        this.name = prompt('Введите Ваше имя');
        this.age = prompt('Введите Ваш возраст');
        this.show = function () {
            if (this.name === '' || this.name === null) {
                alert('error - имя');
            } else if (this.age === '' || this.age === null || !isFinite(+this.age) || this.age < 18) {
                alert('error - возраст');
            } else {
                alert(this.name + ' ' + this.age);
            }
        }
        this.info = function () {
            console.log(this);
        }
    }
    let user = new User();
    user.show();
    user.info();
}
