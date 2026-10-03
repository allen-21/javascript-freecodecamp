function sumAll(numbers){
    const n = Math.min(...numbers);
    const m = Math.max(...numbers);
    let soma = 0
    for(let i = n; i <= m; i++){
        soma += i;

    }
    return soma;

}
console.log(sumAll([4,1]))