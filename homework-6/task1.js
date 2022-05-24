function User() {
    this.name = prompt('Введите Ваше имя');
    this.age = prompt('Введите Ваш возраст');
    this.checkName = this.name === '' || this.name === null;
    this.checkAge = this.age === '' || this.age === null || !isFinite(+this.age) || this.age < 18;
    this.infoUser = function () {
        if (this.checkName) this.name = 'ERROR';
        if (this.checkAge) this.age = 'ERROR';
    }
    this.show = function () {
        console.log(this);
    }
}
function onClickUser() {
    let user = new User();
    user.infoUser();
    user.show();
}
