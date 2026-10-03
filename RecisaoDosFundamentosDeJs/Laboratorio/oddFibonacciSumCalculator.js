function sumFibs(num) {
    let a = 0;
    let b = 1;
    let sum = 0;

    while (b <= num) {
        if (b % 2 !== 0) {
            sum += b;
        }

        const next = a + b;
        a = b;
        b = next;
    }

    return sum;
}

console.log(sumFibs(10)); // 10
console.log(sumFibs(1000)); // 1785