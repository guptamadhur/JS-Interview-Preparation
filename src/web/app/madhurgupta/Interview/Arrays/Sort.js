
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

const arr = [1, 2, 15, 30, 5, 45, 7];
console.log(arr.sort());
console.log(
  arr.sort((a, b) => {
    return a - b;
  })
);
/*
o/p:
> Array [1, 15, 2, 30, 45, 5, 7]
> Array [1, 2, 5, 7, 15, 30, 45]
*/