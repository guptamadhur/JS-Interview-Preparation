// Spread parameters
function spreadSum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(spreadSum(...numbers));
// expected output: 6
console.log(spreadSum.apply(null, numbers));
// expected output: 6

// Rest parameters
const sum = (...theArgs) => {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
};

console.log(sum(1, 2, 3));
// expected output: 6
console.log(sum(1, 2, 3, 4));
// expected output: 10
