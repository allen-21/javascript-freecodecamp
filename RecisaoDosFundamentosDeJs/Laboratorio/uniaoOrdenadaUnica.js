function uniteUnique(...args){
    const copy= []

    for(const array of args){
        for(const value of array){
            if(!copy.includes(value)){
                copy.push(value);
            }
        }
    }

    return copy;

}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))