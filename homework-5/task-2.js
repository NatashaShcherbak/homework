function calcAvg(array) {
    let numberArray = array.filter(function (number) {
        return typeof number === 'number' ? number : false;
    })
    let sum = numberArray.reduce((prev, current) => prev + current, 0);
    return numberArray.length === 1 ? sum : sum / numberArray.length;
}
