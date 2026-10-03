function getIndexToIns(array, num){
    array.sort((a, b) => a - b);
    const result = array.findIndex(element => element >= num)
    if (result === -1){
        return array.length;
    }

    return result;

}

console.log(getIndexToIns([1, 2, 3, 4], 1.5));
console.log(getIndexToIns([20, 3, 5], 19));
console.log(getIndexToIns([3, 10, 5], 11));
