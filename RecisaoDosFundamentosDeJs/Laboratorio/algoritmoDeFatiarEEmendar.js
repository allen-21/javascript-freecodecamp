function frankenSplice(array1, array2, index) {
  const result = [];
  for (let i = 0; i < index; i++) {
    result.push(array2[i]);
  }

  for (let i = 0; i < array1.length; i++) {
    result.push(array1[i]);
  }
  for (let i = index; i < array2.length; i++) {
    result.push(array2[i]);
  }
  return result;
}

console.log(frankenSplice([1, 2], ["a", "b"], 1));
console.log(
  frankenSplice(
    ["claw", "tentacle"],
    ["head", "shoulders", "knees", "toes"],
    2,
  ),
);
