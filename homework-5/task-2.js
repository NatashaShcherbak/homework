function calcAvg(array) {
    let numberArray = array.filter(function (number) {
        return typeof number === 'number';
    })
    let sum = numberArray.reduce((prev, current) => prev + current, 0);
    return sum / numberArray.length;
}
