
const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

button.addEventListener("click", () => {
    const originalText = input.value;

    if (originalText === "") {
        alert("Please input a value");
        return;
    }

    const normalizedText = originalText
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");

    const reversedText = normalizedText
        .split("")
        .reverse()
        .join("");

    if (normalizedText === reversedText) {
        result.textContent = `${originalText} is a palindrome`;
    } else {
        result.textContent = `${originalText} is not a palindrome`;
    }
});

