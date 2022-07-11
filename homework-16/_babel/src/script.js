const data = ([a = 'Error',b,c,...rest]) => {
    if (rest.length < 2) console.log('Error');
    console.log(`${a}-${b}-${c}`);
    console.log({...rest});
}

