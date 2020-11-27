const x = [1, 2, 3];
x[-1] = -1;
console.log(x[x.indexOf(1000)]);
//o/p: -1

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

//let i = ?
let i = Number.MIN_VALUE;
console.log(i);
console.log(i * i);
console.log(i + 1);
console.log(i - 1);
console.log(i / i);
/*
o/p:
> 5e-324
> 0
> 1
> -1
> 1
*/

let x = [1, 2, 3] + [3, 4, 5];
console.log(x);
/*
o/p:
> "1,2,33,4,5"
*/

let x = [...[1, 2, 3], ...[3, 4, 5]];
console.log(x);
/*
o/p:
> Array [1, 2, 3, 3, 4, 5]
*/
