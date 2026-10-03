function bouncer(array) {
  const copyArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i])
      copyArray.push(array[i]);
  }

  return copyArray;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
