function titleCase(title){
        return title
        .split(" ")
        .map(palavra => palavra[0].toUpperCase() + palavra.slice(1).toLowerCase())
        .join(" ");

} 

console.log(titleCase("I like to code"))
console.log(titleCase("sHoRt AnD sToUt"))
