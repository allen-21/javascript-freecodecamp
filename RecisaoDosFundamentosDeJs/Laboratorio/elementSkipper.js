function dropElements(arr, func) {
    let index = 0;

    while (index < arr.length && !func(arr[index])) {
        index++;
    }

    return arr.slice(index);
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}))