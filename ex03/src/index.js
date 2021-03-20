// Only change code below this line
function rangeOfNumbers(startN, endN) {
  if (startN === endN) {
    return [startN];
  } else if (startN > endN) {
    return [
      "The starting number will always be less than or equal to the ending number",
    ];
  } else {
    const arr = rangeOfNumbers(startN, endN - 1);
    arr.push(endN);
    return arr;
  }
}
// Only change code above this line
console.log(rangeOfNumbers(1, 7));
console.log(rangeOfNumbers(3, 10));
console.log(rangeOfNumbers(5, 5));
console.log(rangeOfNumbers(7, 5));
module.exports = rangeOfNumbers;
