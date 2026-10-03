function reverseString(text){

    const invertida = text.split("").reverse().join("");

    return invertida;

}

console.log(reverseString("hello"))