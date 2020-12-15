//Solution 1:
const deepCompare = (val1, val2) =>
  JSON.stringify(val1) === JSON.stringify(val2);

//Solution 2:
const deepCompare2 = (a, b) => {
  if (typeof a == "object" && a != null && typeof b == "object" && b != null) {
    let count = [0, 0];
    for (let key in a) count[0]++;
    for (let key in b) count[1]++;
    if (count[0] - count[1] != 0) {
      return false;
    }
    for (let key in a) {
      if (!(key in b) || !deepCompare(a[key], b[key])) return false;
    }
    for (let key in b) {
      if (!(key in a) || !deepCompare(b[key], a[key])) return false;
    }
    return true;
  } else {
    return a === b;
  }
};

console.log(deepCompare(1, 2)); // false
console.log(deepCompare({ 0: 1 }, [1])); //true
console.log(deepCompare({ a: 1 }, { a: 2 })); // false
console.log(deepCompare({ a: 2 }, { a: 2 })); // true
console.log(deepCompare([1, 2, { a: 1 }], [1, 2, { a: 1 }])); // true
