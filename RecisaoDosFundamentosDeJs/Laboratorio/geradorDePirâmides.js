function pyramid(char, rows, inverted) {
    let result = "\n";

    if (inverted === false) {
        for (let i = 0; i < rows; i++) {
            const spaces = rows - i - 1;
            const chars = 2 * i + 1;

            result += " ".repeat(spaces);
            result += char.repeat(chars);
            result += "\n";
        }
    } else {
        for (let i = rows - 1; i >= 0; i--) {
            const spaces = rows - i - 1;
            const chars = 2 * i + 1;

            result += " ".repeat(spaces);
            result += char.repeat(chars);
            result += "\n";
        }
    }

    return result;
}

console.log(pyramid("o", 4, false))