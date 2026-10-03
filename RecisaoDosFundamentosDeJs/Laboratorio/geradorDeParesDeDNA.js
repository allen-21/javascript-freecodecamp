function pairElement(length) {
  const result = [];

  for (const letra of length) {
    if (letra === "A") {
      result.push(["A", "T"]);
    } else if (letra === "T") {
      result.push(["T", "A"]);
    } else if (letra === "C") {
      result.push(["C", "G"]);
    } else if (letra === "G") {
      result.push(["G", "C"]);
    }
  }
  return result;
}

console.log(pairElement("ATCG"));
console.log(pairElement("CTCTA"));
