function destroyer(array, ...valor) {
  return array.filter((element) => !valor.includes(element));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
