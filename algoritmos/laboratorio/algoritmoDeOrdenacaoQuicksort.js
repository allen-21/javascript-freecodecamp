function quicksort(array) {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[array.length - 1];

  const leftPart = [];
  const rightPart = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      leftPart.push(array[i]);
    } else {
      rightPart.push(array[i]);
    }
  }

  return [
    ...quicksort(leftPart),
    pivot,
    ...quicksort(rightPart)
  ];
}
