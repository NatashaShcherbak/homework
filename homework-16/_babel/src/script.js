const data = ([a = 'Error',b,c,...rest]) => {
    if (rest.length < 2) console.log('Error');
    console.log(`${a}-${b}-${c}`);
    const dataMap = () => {
        const map = new Map();
        for (let item of rest) {
            map.set(rest.indexOf(item), item);
        }
        console.log(Object.fromEntries(map));
    }
    dataMap();
}

