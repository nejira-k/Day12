// Only change code below this line
function sumFibonacci(num) {
  if (num <= 0) return 0;
  if (num === 1) return 1;

  const arrFib = [1, 1];
  var nextFib = 0;

  while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
    arrFib.unshift(nextFib);
  }
  return arrFib.filter((x) => x % 2 != 0).reduce((a, b) => a + b);
}
// Only change code above this line
console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;
