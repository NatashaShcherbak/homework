function deleteLetters(string,array) {
    let value = [...string];
    if (!value.includes(array[0]) && !value.includes(array[1])) return string;
    if (value.includes(array[0])) {
        return  deleteLetters(string.replace(array[0],''),array);
    }
    return deleteLetters(string.replace(array[1],''),array);
}


