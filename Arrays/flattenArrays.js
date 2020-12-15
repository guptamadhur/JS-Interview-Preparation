// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
// https://codeinterview.io/YAORADJLWO

const flattenArray = (arr) => {
  if (arr == null || !Array.isArray(arr)) return [];
  return arr.reduce(
    (a, b) => a.concat(Array.isArray(b) ? flattenArray(b) : b),
    []
  );
};

console.log(flattenArray([1, 2, 3])); // [1,2,3]
console.log(flattenArray([1, 2, 3, [4, 5]])); // [1,2,3,4,5]
console.log(flattenArray([1, 2, 3, [4, 5, [6]]])); // [1,2,3,4,5,6]
