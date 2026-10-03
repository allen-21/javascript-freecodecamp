function steamrollArray(arr) {
    let result = [];

    arr.forEach(element => {
        if (Array.isArray(element)) {
            result = result.concat(steamrollArray(element));
        } else {
            result.push(element);
        }
    });

    return result;
}