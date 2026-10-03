function largestOfAll(arry){
    const maior =[]

    for (const numero of arry){
        maior.push(Math.max(...numero))
    }

    return maior;

}

console.log(largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))