function checkAge() {
    let age = +prompt('Введите Ваш возвраст');
    let result = (age >= 18 && age <= 100) ? (`${age} Ура`) : false;
    console.log(result);
}