function outer(x) {
    return function(y) {
        return x + y;
    };
}

let add5 = outer(5);
console.log(add5(3));