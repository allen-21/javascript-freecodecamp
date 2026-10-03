function diffArray(array1, array2) {
    const result = array1
        .filter(element => !array2.includes(element))
        .concat(
            array2.filter(element => !array1.includes(element))
        );
  return result;
}

console.log(
  diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"],
  ),
);

console.log(diffArray([], []));
console.log(diffArray([], ["apple", "banana"]));
