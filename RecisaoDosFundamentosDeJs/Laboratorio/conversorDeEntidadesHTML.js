function convertHTML(str) {
    let result = "";

    for (const letra of str) {
        if (letra === "&") {
            result += "&amp;";
        } else if (letra === "<") {
            result += "&lt;";
        } else if (letra === ">") {
            result += "&gt;";
        } else if (letra === '"') {
            result += "&quot;";
        } else if (letra === "'") {
            result += "&apos;";
        } else {
            result += letra;
        }
    }

    return result;
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));