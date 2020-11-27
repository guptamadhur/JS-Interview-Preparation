// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

var total = [0, 1, 2, 3].reduce(function (a, b) {
  return a + b;
});
console.log(total);
// total == 6

var flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce(function (a, b) {
  return a.concat(b);
}, []);
console.log(flattened);
// flattened is [0, 1, 2, 3, 4, 5]
