function deleteLetters(string,array) {
    if (array.length === 0) return string;
    return deleteLetters(string.replaceAll(array.pop(),''), array);
}


