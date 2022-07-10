
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
// https://codeinterview.io/YAORADJLWO

let ipArray = [1, 2, 3, [4, 5, [6, 7, [8]]]]
console.log("Input Array: ", ipArray)

// Option 1: Type check
const flattenArray = (arr) => {
  if (arr == null || !Array.isArray(arr)) return [];
  return arr.reduce((a, b) => a.concat(Array.isArray(b) ? flattenArray(b) : b), []);
};

console.log("Option 1: ", flattenArray([1, 2, 3])); // [1,2,3]
console.log("Option 1: ", flattenArray([1, 2, 3, [4, 5]])); // [1,2,3,4,5]
console.log("Option 1: ", flattenArray([1, 2, 3, [4, 5, [6]]])); // [1,2,3,4,5,6]
console.log("Option 1: ", flattenArray(ipArray)); // [1,2,3,4,5,6]


// Option 2: Flat Function
console.log("Option 2: ", ipArray.flat());


// Option 3: 
// There is a confusingly hidden method, which constructs a new array without mutating the original one:
let newArray = Array.prototype.concat.apply([], ipArray);
console.log("Option 3: ", ipArray);
